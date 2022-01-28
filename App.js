import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProductScreen from './src/screens/ProductScreen/ProductScreen';
import HomeScreen from './src/screens/ShopingCartScreen/ShopingCartScreen';
import ShopingCartScreen from './src/screens/ShopingCartScreen/ShopingCartScreen';

const App = () => {
  return (
    <View style={StyleSheet.frontPage}>
      <HomeScreen />
      <ProductScreen />
      <ShopingCartScreen />
    </View>
  );
};

export default App;
