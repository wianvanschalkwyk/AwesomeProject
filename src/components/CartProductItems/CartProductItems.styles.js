import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: '#dcdedc',
    marginVertical: 5,
    
    
  },
  row: {
    flexDirection: 'row',
  },

  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 15,
  },

  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  rightContainer: {
    padding: 10,
    flex: 3,
  },

  ratingsContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  selectorContainer: {
    marginLeft: 30,
    marginVertical:20,
    
   
  },
});

export default styles;
