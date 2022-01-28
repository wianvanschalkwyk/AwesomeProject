import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: '#dcdedc',
    marginVertical: 5,
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
});

export default styles;
