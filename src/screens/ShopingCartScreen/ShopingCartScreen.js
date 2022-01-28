import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ProductItem from '../../components/ProductItems/ProductItems';

import products from '../../data/cart';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item.item} />}
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
