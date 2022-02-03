import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button/Button';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';

import styles from './ProductScreen.styles';

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const params = useRoute();

  const selectedItem = params.params.item;
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.info}>{selectedItem.title}</Text>

      <ImageCarousel images={[selectedItem.image]} />

      <Text style={styles.price}>R{selectedItem.price * quantity}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <Button
        text={'By now'}
        onPress={() => navigation.navigate('ShopingCartScreen', {})}
      />
    </View>
  );
};

export default ProductScreen;
