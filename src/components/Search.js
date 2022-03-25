import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = props => {
  const [search, setSearch] = useState('');
  function handleSearchChange(text) {
    setSearch(text);
    props.setSearchTxt(text);
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.searchView}>
        <Icon name="search" size={30} style={styles.iconStyles} color="black" />
        <TextInput
          style={styles.inputStyle}
          placeholder="Search"
          onChangeText={text => handleSearchChange(text)}
          value={search}
        />
      </View>
      <View style={styles.tuneView}>
        <Icon name="tune" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 25,
  },
  searchView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '75%',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  inputStyle: {
    width: '100%',
    color: 'black',
    height: 60,
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  iconStyles: {
    // padding: -20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 10,
  },
  tuneView: {
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    height: 60,
    alignContent: 'center',
    padding: 10,
    alignSelf: 'center',
  },
});

export default Search;
