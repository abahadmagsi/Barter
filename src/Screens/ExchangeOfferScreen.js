import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import BackHeader from '../components/BackHeader';
import Header from '../components/Header';

const ExchangeOfferScreen = props => {
  return (
    <View>
      <BackHeader navigation={props.navigation} />
      <View style={styles.uploadView}>
        <Text style={styles.uploadText}>
          Upload your photo of exchange items
        </Text>
        <ImageUpload />
        <ImageUpload />
        <ImageUpload />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert('Submitted let user review')}>
        <Text style={styles.btnTxt}>Submit deal</Text>
      </TouchableOpacity>
    </View>
  );
};

const ImageUpload = () => {
  return (
    <View style={styles.imgView}>
      <TouchableOpacity>
        <Image
          source={require('../assets/uploadImage.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    resizeMode: 'center',
    height: 100,
    width: 100,
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderStyle: 'dashed',
    borderWidth: 1,
    width: '60%',
    marginVertical: 20,
  },
  btn: {
    backgroundColor: 'tomato',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ExchangeOfferScreen;
