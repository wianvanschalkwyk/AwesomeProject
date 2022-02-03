import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={HomeScreen} name="home" />
      <Tab.Screen component={HomeScreen} name="Profile" />
      <Tab.Screen component={HomeScreen} name="shopingCart" />
      <Tab.Screen component={HomeScreen} name="more" />

    </Tab.Navigator>
  );
};
export default BottomTabNav;
