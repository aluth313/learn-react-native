import {Button, Text, View} from 'react-native';

export default function OtherScreen({navigation, route}) {
  const hasil = `Go to About, ${route.params?.name}`;
  return (
    <View>
      <Text>Other Screen</Text>
      <Button
        title={hasil}
        onPress={() =>
          navigation.navigate('About', {
            name: 'alah siah boy',
          })
        }
      />
    </View>
  );
}
