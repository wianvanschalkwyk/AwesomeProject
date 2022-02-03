import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen/HomeScreen';
import ProductScreen from '../ProductScreen/ProductScreen';
import ShopingCartScreen from '../ShopingCartScreen/ShopingCartScreen';
import NewClientScreen from '../NewClientScreen/NewClientScreen';

const Root = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="HomePage">
        <Root.Screen component={HomeScreen} name="HomePage" />
        <Root.Screen component={ProductScreen} name="ProductScreen" />
        <Root.Screen component={ShopingCartScreen} name="ShopingCartScreen" />
        <Root.Screen component={NewClientScreen} name="NewClientScreen" />
      </Root.Navigator>
    </NavigationContainer>
  );
};
export default Route;
