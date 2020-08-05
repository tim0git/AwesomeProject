import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MockedTabNavigator = ({component}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="MockedScreen" component={component} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MockedTabNavigator;
