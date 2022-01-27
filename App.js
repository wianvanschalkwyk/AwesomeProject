import React, {useState} from 'react';
import {View, Text, StatusBar, useColorScheme, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/HomeScreen/ProductScreen';

const App = () => {
  // const isDarkMode = useColorScheme () =>'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker: Colors.lighter,
  // };

  return (
    <View style={StyleSheet.frontPage}>
      {/* <HomeScreen /> */}
      <ProductScreen />
    </View>
  );
};

export default App;
