import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Picker,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const MyAds = props => {
  return (
    <View>
      <AdsHeader props={props} />
      <ScrollView>
        <View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.imageView}>
              <Text style={styles.imageTxt}>+ Add images</Text>
            </View>
            <View style={{width: '100%', padding: 10}}>
              <Text style={styles.inputTxt}>Ad title*</Text>
              <TextInput style={styles.input} />
              <Text style={styles.inputTxt}>Describe your product*</Text>
              <TextInput style={styles.input} />
              <Text style={styles.inputTxt}>Describe your category*</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{width: '100%', padding: 10}}>
              <Text>Information of exchange item</Text>
              <Text style={styles.inputTxt}>Ad title*</Text>
              <TextInput style={styles.input} />
              <Text style={styles.inputTxt}>Describe your product*</Text>
              <TextInput style={styles.input} />
              <Text style={styles.inputTxt}>Describe your category*</Text>
              <TextInput style={styles.input} />
              <View style={styles.imagesView}>
                <Images />
                <Images />
                <Images />
              </View>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Images = () => {
  return (
    <View
      style={{
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
      }}>
      <Image
        source={require('../assets/uploadImage.png')}
        style={styles.image}
      />
    </View>
  );
};
const AdsHeader = props => {
  return (
    <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
      <TouchableOpacity onPress={() => props.props.navigation.navigate('Home')}>
        <Icon name="close" size={30} />
      </TouchableOpacity>
      <Text style={{fontSize: 15, fontWeight: 'bold', margin: 5}}>Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    width: '90%',
    height: 100,
    backgroundColor: '#097969',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTxt: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
  },
  inputTxt: {
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
  },
  imagesView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 10,
    width: '80%',
    borderRadius: 10,
    marginBottom: 200,
  },
  btnTxt: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default MyAds;
