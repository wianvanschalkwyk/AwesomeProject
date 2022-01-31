import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './CartProductItems.styles';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

const CartProductItem = props => {
  const {quantity: quantityProp, item} = props;

  const [quantity, setQuantity] = useState(quantityProp);
  return (
    <View style={styles.root}>
      <View style={styles.row}>
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
      </View>
      <View style={styles.selectorContainer}>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};
export default CartProductItem;
