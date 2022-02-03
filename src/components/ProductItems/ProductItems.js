import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './ProductItems.styles';

const ProductItem = props => {
  const {item, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              /*needs key*/
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
            />
          ))}
        </View>
        <Text style={styles.price}>R{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ProductItem;
