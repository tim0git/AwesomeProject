import React from 'react';
// import PropTypes from 'prop-types'
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from './gallery/Gallery';
import SubGallery from './gallery/SubGallery';

const Stack = createStackNavigator();

function GalleryNav(props) {
  return (
    <Stack.Navigator initialRouteName={Gallery}>
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Mountains" component={SubGallery} />
      <Stack.Screen name="Forrest" component={SubGallery} />
      <Stack.Screen name="Beach" component={SubGallery} />
      <Stack.Screen name="City" component={SubGallery} />
    </Stack.Navigator>
  );
}

// GalleryNav.propTypes = {}

export default GalleryNav;
