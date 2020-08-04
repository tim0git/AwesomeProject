import React from 'react';
// import PropTypes from 'prop-types';
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
  // can i not map through the above? is this the flat list component? are there performance improvements using flat list?
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Forrest')}>
            <Image
              source={images.forrest}
              style={{
                resizeMode: 'cover',
                height: 150,
                width: 200,
              }}
            />
            <Text style={styles.description}>Forrest</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Beach')}>
            <Image
              source={images.beach}
              style={{
                resizeMode: 'cover',
                height: 150,
                width: 200,
              }}
            />
            <Text style={styles.description}>Beach</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('City')}>
            <Image
              source={images.city}
              style={{
                resizeMode: 'cover',
                height: 150,
                width: 200,
              }}
            />
            <Text style={styles.description}>City</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Mountains')}>
            <Image
              source={images.mountains}
              style={{
                resizeMode: 'cover',
                height: 150,
                width: 200,
              }}
            />
            <Text style={styles.description}>Mountains</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

Gallery.propTypes = {};

export default Gallery;
