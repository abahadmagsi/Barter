import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Categories = props => {
  const [activeTab, setActiveTab] = useState('All');

  const handleClick = () => {
    props.setActiveCat(activeTab);
  };
  handleClick();
  return (
    <View style={styles.mainView}>
      <HeaderBtn
        text="All"
        bgColor="gray"
        fcolor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderBtn
        text="Chair"
        bgColor="white"
        fcolor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderBtn
        text="Table"
        bgColor="white"
        fcolor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderBtn
        text="Lamp"
        bgColor="white"
        fcolor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderBtn
        text="Floor"
        bgColor="white"
        fcolor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderBtn = props => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {backgroundColor: props.activeTab == props.text ? '#2C3539' : null},
      ]}
      onPress={() => props.setActiveTab(props.text)}>
      <Text
        style={[
          styles.btnTxt,
          {color: props.activeTab == props.text ? 'white' : 'gray'},
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  btn: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    justifyContent: 'space-around',
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default Categories;
