import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import Button from '../../components/Button/Button';
import CartProductItem from '../../components/CartProductItems/CartProductItems';

import products from '../../data/cart';


const ShopingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.item.quantity,
    0,
  );
  return (
    <View style={styles.page}>
      <View>
        <Text>
          Subtotal ({products.length} items):R{totalPrice}
        </Text>
        <Button text='Proceed to checkout' onPress={()=> console.warn('Go to checkout')} />
      </View>

      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem item={item.item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
export default ShopingCartScreen;
