// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
// import OtherScreen from './screens/OtherScreen';
// import AboutScreen from './screens/AboutScreen';
import LearnAPI from './screens/LearnAPI';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Other" component={OtherScreen} />
    //     <Stack.Screen name="About" component={AboutScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <LearnAPI />
  );
}
