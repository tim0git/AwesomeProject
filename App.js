import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default App;
