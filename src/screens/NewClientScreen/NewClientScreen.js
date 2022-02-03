import React, {useState} from 'react';
import {View, Text, TextInput, Alert,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './NewClientScreen.styles';
import countryList, {countries} from 'countries-list';
import Button from '../../components/Button/Button';

const NewClientScreen = () => {
  const [country, setCountry] = useState(countries[0]);

  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const onCheckout = () => {

    if (!fullname) {
      Alert.alert('please complete field');
      return;
    }
    console.warn('Please complete');
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.row}>
        <Picker
          style={{height: 80, width: '100%', fontSize: 80}}
          selectedValue={country}
          onValueChange={val => {
            setCountry(val);
          }}>
          {Object.values(countryList.countries).map(a => (
            <Picker.Item label={a.name} value={a.name} />
          ))}
        </Picker>
      </View>
      {/* Full name */}
      <View style={styles.row}>
        <Text style={styles.label}>Full name</Text>
        <TextInput
          style={styles.input}
          placeholder="Fill in here"
          value={fullname}
          onChangeText={setFullname}
        />
        {/* Phone number */}
        <Text style={styles.label}>Phone number</Text>
        <TextInput
          keyboardType="phone-pad"
          style={styles.input}
          placeholder="Fill in here"
          value={phone}
          onChangeText={setPhone}
        />
        {/* address */}
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Fill in here"
          value={address}
          onChangeText={setAddress}
        />
        {/* City */}
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Fill in here"
          value={city}
          onChangeText={setCity}
        />
      </View>
      <Button text="checkout" onPress={onCheckout} />
    </ScrollView>
  );
};

export default NewClientScreen;
