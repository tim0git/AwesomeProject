import React from 'react';
// import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

function Hello(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello World</Text>
    </View>
  );
}

// Hello.propTypes = {};

export default Hello;
