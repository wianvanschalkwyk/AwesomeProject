import React from 'react';
import {Pressable, Text,StyleSheet} from 'react-native';

interface ButtonProps {
  text: String;
  onPress: () => void;
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text style ={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor:'#99baf0',
    margin:10,
    height:35,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    borderWidth:1 ,
  },
  text: {
    fontSize:16,

  },
});
export default Button;
