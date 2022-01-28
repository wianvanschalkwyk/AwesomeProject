import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button/Button';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import product from '../../data/product';
import styles from './ProductScreen.styles';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [quantity, setQuantity] = useState(1);
  return (
    <View>
      <Text style={styles.info}>
        Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
      </Text>

      <ImageCarousel images={product.images} />

      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      <Text style={styles.price}>R{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Button
        text={'Add to cart'}
        onPress={() => {
          console.warn('Add to cart');
        }}
      />
      <Button
        text={'Buy now'}
        onPress={() => {
          console.warn('Buy now');
        }}
      />
    </View>
  );
};

export default ProductScreen;
