import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from './gallery/Gallery';
import Forrest from './gallery/Forrest';
import Beach from './gallery/Beach';
import Mountains from './gallery/Mountains';
import City from './gallery/City';

const Stack = createStackNavigator();

function GalleryNav(props) {
  return (
    <Stack.Navigator initialRouteName={Gallery}>
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Forrest" component={Forrest} />
      <Stack.Screen name="Beach" component={Beach} />
      <Stack.Screen name="City" component={City} />
      <Stack.Screen name="Mountains" component={Mountains} />
    </Stack.Navigator>
  );
}

export default GalleryNav;
