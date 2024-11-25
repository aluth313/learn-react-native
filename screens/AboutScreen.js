import {useNavigation, useRoute} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export default function AboutScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const apanih = `${route.params?.name}`;
  return (
    <View>
      <Text>About Screen {apanih}</Text>
      <Button title="Back to Other" onPress={() => navigation.goBack()} />
    </View>
  );
}
