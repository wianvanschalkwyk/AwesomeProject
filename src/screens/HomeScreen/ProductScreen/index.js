import React, {useState} from 'react';
import {View,Text, ViewBase} from 'react-native';
import styles from './styles';
import product from '../../../data/product';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../../components/QuantitySelector';



const ProductScreen= () => {
  const [selectedOption,setSelectedOption] = useState('');
  const [quantity,setQuantity] = useState(1);
  return (
    <View>
      <Text style={styles.title}>halo world</Text>


      <Picker
      selectedValue={selectedOption}
      onValueChange={(itemValue) =>setSelectedOption(itemValue)}>
      

        {product.options.map(option =>(<Picker.Item label={option} value={option}/>))}
      


      </Picker>

      <Text style={styles.price}>R{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      
      <QuantitySelector quantity ={quantity} setQuantity={setQuantity}/>
    </View>
  );
};


export default ProductScreen;
