import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Hello from './components/Hello';
import Details from './components/Details';
import GalleryNav from './components/GalleryNav';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Hello} />
      <Tab.Screen name="Image Gallery" component={GalleryNav} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
