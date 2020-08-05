import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import images from '../../resources/images/index';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
});

function Gallery({navigation}) {
  const [types] = useState(['Forrest', 'Beach', 'City', 'Mountains']);
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {types.map((type) => {
          return (
            // Possibly extract this out into a re-usable component..
            <View key={type}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(type, {
                    type,
                  })
                }>
                <Image
                  source={images[type.toLowerCase()]}
                  style={{
                    resizeMode: 'cover',
                    height: 150,
                    width: 200,
                  }}
                  id={type}
                />
                <Text style={styles.description}>{type}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

Gallery.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Gallery;
