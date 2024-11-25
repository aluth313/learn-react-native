// import {Button, Text, View} from 'react-native';

import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> Ini HomeScreen </Text>
        <Button
          title="Go to Other"
          onPress={() =>
            this.props.navigation.navigate('Other', {
              name: 'uhuyy',
            })
          }
        />
      </View>
    );
  }
}

// export default function HomeScreen({navigation}) {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Other"
//         onPress={() => navigation.navigate('Other')}
//       />
//     </View>
//   );
// }
