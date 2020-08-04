import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Hello from './components/Hello';
import Details from './components/Details';
// import // SafeAreaView,
// // StyleSheet,
// // // ScrollView,
// // View,
// // Text,
// // StatusBar,
// 'react-native';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Hello} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
