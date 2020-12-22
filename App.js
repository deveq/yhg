/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SplashComponent from './src/home';



const App = () => {
  return (
    <View style={styles.container}>
      <SplashComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});

export default App;
