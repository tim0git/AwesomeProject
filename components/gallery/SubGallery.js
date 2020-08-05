import React from 'react';
import PropTypes from 'prop-types';

import {View, Text} from 'react-native';

function SubGalllery({route}) {
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
}

SubGalllery.propTypes = {
  route: PropTypes.object.isRequired,
};

export default SubGalllery;
