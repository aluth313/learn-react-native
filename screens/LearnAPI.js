import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export default function LearnAPI() {
  //   render() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [offset, setOffset] = useState(0);
  const [isListEnd, setIsListEnd] = useState(false);

  const fetchData = async () => {
    console.log('offset now:', offset);
    if (!isLoading && !isListEnd) {
      setIsLoading(true);
      const uriPost = `https://dummyjson.com/products?limit=10&skip=${offset}&select=title,description`;
      console.log('url nya:', uriPost);

      try {
        const response = await axios.get(uriPost);
        const data = response.data;
        console.log('dari axios nih', data);
        if (data.products.length > 0) {
          setOffset(offset + 10);
          setPostList([...postList, ...data.products]);
        } else {
          setIsListEnd(true);
        }
        setIsLoading(false);
      } catch (error) {
        console.log('Error:', error);
      }

      // fetch(uriPost)
      //   .then(response => response.json())
      //   .then(responseJson => {
      //     console.log('apa response json', responseJson);
      //     if (responseJson.products.length > 0) {
      //       setOffset(offset + 10);
      //       setPostList([...postList, ...responseJson.products]);
      //     } else {
      //       setIsListEnd(true);
      //     }
      //     setIsLoading(false);
      //   })
      //   .catch(error => {
      //     console.log('Error:', error);
      //   });
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (isLoading) {
  //   return (
  //     <SafeAreaView style={styles.loadingContainer}>
  //       <ActivityIndicator size="large" color="0000ff" />
  //       <Text>Loading...</Text>
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.description}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
          ListEmptyComponent={<Text>No Posts Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
          ListFooterComponent={
            <View>
              {isLoading ? (
                <ActivityIndicator color="black" style={{margin: 15}} />
              ) : (
                <Text style={styles.footerText}>End of List</Text>
              )}
            </View>
          }
          refreshing={refreshing}
          onRefresh={handleRefresh}
          onEndReached={fetchData}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  );
  //   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: '#666666',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
