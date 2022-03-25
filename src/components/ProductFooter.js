import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ProductFooter = props => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Call</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>SMS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderTopColor: 'grey',
    borderTopWidth: 0.5,
    paddingTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: 'tomato',

    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductFooter;
