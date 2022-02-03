import {useNavigation} from '@react-navigation/native';
import {useQuery} from 'graphql-hooks';
import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import ProductItem from '../../components/ProductItems/ProductItems';
// import products from '../../data/products';
import {ActivityIndicator, Image, TouchableOpacity} from 'react-native';

const PRODUCTS = `query{
  products{
    name
    status
    description
    imageUrl
  }
}`;

const HomeScreen = () => {
  const navigation = useNavigation();
  const {data, loading, error} = useQuery(PRODUCTS);
  console.log('🚀 ~ file: HomeScreen.js ~ line 21 ~ HomeScreen ~ data', data);
  return (
    <View style={styles.page}>
      {error && (
        <>
          <Text style={styles.errorText}>API Error. Please reload</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'HomePage'}],
              })
            }>
            <Text>Refresh</Text>
          </TouchableOpacity>
        </>
      )}
      {loading && <ActivityIndicator color="green" size="large" />}
      {data &&
        data.products.map(product => (
          <>
            <Text>{product.name}</Text>
            <FlatList
              data={product}
              renderItem={({item}) => (
                <ProductItem
                  item={item}
                  onPress={() => navigation.navigate('ProductScreen', {item})}
                />
              )}
            />
            <Image style={styles.imageStyle} source={{uri: product.imageUrl}} />
          </>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    color: '#f10',
    fontSize: 20,
  },
  imageStyle: {
    height: 100,
    width: 100,
  },
});

export default HomeScreen;
