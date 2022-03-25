import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductFooter from './ProductFooter';
const DescriptionCard = props => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.mainCardView}>
        <View style={{padding: 25}}>
          <Text style={styles.nameTxt}>{props.item.name}</Text>
          <Text style={styles.nameSubTxt}>by {props.item.seller}</Text>
        </View>
        <View style={styles.ratingStyle}>
          <Icon name="star" size={25} color="gold" />
          <Text style={styles.ratingText}>{props.item.rating}</Text>
        </View>
      </View>
      <View style={styles.desStyle}>
        <Text style={{fontWeight: '700', lineHeight: 25, fontSize: 15}}>
          {props.item.longDes}
        </Text>
      </View>
      <Text style={styles.exchangeTxt}>
        Products in exhange of {props.item.name}
      </Text>
      <View style={styles.imagesView}>
        {props.item.images.map((item, ind) => (
          <Images source={item} />
        ))}
      </View>
      <SeltectingColor props={props} />
      <View>
        <ProductFooter props={props} />
      </View>
    </View>
  );
};

const SeltectingColor = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Text style={styles.colorTxt}>
          Your can also give offer for exchange
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            props.props.props.navigation.navigate('ExchangeOfferScreen')
          }>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Give offer to exchange
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Images = props => {
  return (
    <View
      style={{
        backgroundColor: '#FCF5E5',
        width: 100,
        height: 100,
        borderRadius: 10,
        marginHorizontal: 10,
        margin: 10,
      }}>
      <Image source={props.source} style={styles.imageStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCardView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,

    marginTop: -30,
    zIndex: 1,
    backgroundColor: 'white',
  },
  ratingStyle: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
  },
  ratingText: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  nameTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  nameSubTxt: {
    fontSize: 18,
    fontWeight: '400',
  },
  desStyle: {
    paddingHorizontal: 20,
  },
  imageStyles: {
    width: 100,
    height: 100,
  },
  imagesView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  colorTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  roundColor: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    margin: 10,
    borderRadius: 30,
  },
  exchangeTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'black',
  },
  btn: {
    backgroundColor: 'tomato',

    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});

export default DescriptionCard;
