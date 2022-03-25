import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const BackHeader = props => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backIcon}>
        <Icon name="chevron-back-outline" size={30} color="black" />
      </TouchableOpacity>
      <Icon name="heart" size={30} color="tomato" style={styles.heartIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: null,
    alignItems: 'center',
  },
  backIcon: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  heartIcon: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30,
  },
});

export default BackHeader;
