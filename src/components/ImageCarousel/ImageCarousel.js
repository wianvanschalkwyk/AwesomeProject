import React from 'react';
import {View, Image, FlatList, StyleSheet} from 'react-native';

const ImageCarousel = props => {
  const {images} = props;
  return (
    <View style={styles.root}>
      <FlatList horizontal 
        data={images}
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri: images ? item : ''}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  /*does not work*/
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
export default ImageCarousel;
