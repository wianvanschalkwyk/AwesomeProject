import React from 'react';
import {Pressable,, Text,} from 'react-native';

interface ButtonProps{
    text:String;
    onPress: ()=>{};
}

const Button = ({text,onPress}:ButtonProps)=>{
return (
<Pressable onPress={onPress}>
    <Text>{text}</Text>
</Pressable>





);
};
export default Button;