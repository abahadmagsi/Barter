import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Product from '../components/Product';
import {ProductData} from '../ProductData';
const HomeScreen = ({navigation}) => {
  const [activeCat, setActiveCat] = useState('');
  const [searchTxt, setSearchTxt] = useState('');
  return (
    <View>
      <Header />
      <Search setSearchTxt={setSearchTxt} />
      <Categories setActiveCat={setActiveCat} />
      <ScrollView style={{marginBottom: 300}}>
        {searchTxt
          ? ProductData.map((item, ind) => {
              const itemName = item.name.toLowerCase();
              const SearchText = searchTxt.toLowerCase();
              if (SearchText == itemName) {
                return (
                  <Product key={ind} item={item} navigation={navigation} />
                );
              }
            })
          : ProductData.map((item, ind) => {
              if (activeCat == item.category || activeCat == 'All') {
                return (
                  <Product key={ind} item={item} navigation={navigation} />
                );
              }
            })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
