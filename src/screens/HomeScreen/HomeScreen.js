import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ProductItem from '../../components/ProductItems';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* <ProductItem  item={products[0]}/>
      <ProductItem  item={products[1]}/>
      <ProductItem  item={products[2]}/> */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
export default HomeScreen;
