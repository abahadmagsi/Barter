import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import BackHeader from '../components/BackHeader';
import DescriptionCard from '../components/DescriptionCard';
const ProductScreen = props => {
  return (
    <ScrollView>
      <View style={{backgroundColor: '#e5e4e2', flex: 1}}>
        <ImageBackground
          source={props.route.params.item.item.imageSource}
          style={styles.imageStyle}>
          <BackHeader navigation={props.navigation} />
        </ImageBackground>
        <DescriptionCard item={props.route.params.item.item} props={props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    resizeMode: 'contain',
    height: 400,
  },
});

export default ProductScreen;
