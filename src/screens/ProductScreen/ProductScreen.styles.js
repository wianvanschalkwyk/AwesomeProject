import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
root:{
  flexDirection: 1,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: '#dcdedc',
    marginVertical:5,
},

  price: {
      padding:10,
    fontSize: 35,
  },
  description: {
    fontSize: 15,
    marginVertical:10,
    lineHeight:20,
  },
 
  info: {
    fontSize:10,
  },
});

export default styles;
