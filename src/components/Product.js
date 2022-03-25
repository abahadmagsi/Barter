import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Product = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <Icon name="favorite" size={30} color="tomato" style={styles.icon} />
        <Image source={props.item.imageSource} style={styles.imageStyle} />
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={styles.txtMainView}>
          <View style={styles.headerTxt}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              {props.item.name}
            </Text>
            <Text style={{fontWeight: '500', fontSize: 15}}>
              by {props.item.seller}
            </Text>
            <Text style={{paddingVertical: 20, maxWidth: 170}}>
              {props.item.discription}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.buyBtn}
            onPress={() =>
              props.navigation.navigate('ProductScreen', {item: props})
            }>
            <Text style={styles.buyBtnTxt}>Exchange</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 30,
    margin: 10,
  },
  imageView: {
    borderRadius: 15,
    width: '50%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    alignSelf: 'center',
    height: 170,
  },
  imageStyle: {
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    position: 'absolute',
    left: 130,
    zIndex: 1,
    padding: 6,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  txtMainView: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyBtn: {
    backgroundColor: '#2C3539',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  buyBtnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default Product;
