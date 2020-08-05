import React from 'react';
// import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

function Hello() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text id="welcome-message">Hello World</Text>
    </View>
  );
}

// Hello.propTypes = {};

export default Hello;
