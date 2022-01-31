import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProductScreen from './src/screens/ProductScreen/ProductScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ShopingCartScreen from './src/screens/ShopingCartScreen/ShopingCartScreen';
import NewClientScreen from './src/screens/NewClientScreen/NewClientScreen';

const App = () => {
  return (
    <View style={StyleSheet.frontPage}>
      {/* <HomeScreen /> */}
      {/* <ProductScreen /> */}
      {/* <ShopingCartScreen /> */}
      <NewClientScreen />
    </View>
  );
};

export default App;
