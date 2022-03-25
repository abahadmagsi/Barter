import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.headTxt}>Barter</Text>
      <Text style={styles.subTxt}>Goods for Goods!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 20,
  },
  headTxt: {
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
  },
  subTxt: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default Header;
