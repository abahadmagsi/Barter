import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.profileView}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.images}
        />
        <View style={{marginLeft: 20}}>
          <Text style={styles.profileTxt}>Abdul Ahad</Text>
          <Text style={styles.profilesubTxt}>View and edit profile</Text>
        </View>
      </View>
      <Cards
        fText={`exchange Packages ${'&'} My Orders`}
        sText="Packages, Orders, billing and invoices"
        ficonName="payment"
        liconName="east"
      />
      <Cards
        fText="Settings"
        sText="Privacy and Logout"
        ficonName="settings"
        liconName="east"
      />
      <Cards
        fText="Help and Support"
        sText="Help center and legal terms"
        ficonName="info"
        liconName="east"
      />
    </View>
  );
};

const Cards = props => {
  return (
    <TouchableOpacity style={styles.cardsView}>
      <Icon name={props.ficonName} color="black" size={30} />
      <View>
        <Text style={styles.cardTxt}>{props.fText}</Text>
        <Text style={styles.cardTxt2}>{props.sText}</Text>
      </View>
      <Icon name={props.liconName} color="black" size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  images: {
    width: 90,
    height: 90,
    borderRadius: 350,
    resizeMode: 'center',
  },
  profileTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  profilesubTxt: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'underline',
  },
  cardsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    margin: 10,
    alignItems: 'flex-start',
  },
  cardTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  cardTxt2: {
    fontWeight: '500',
    fontSize: 15,
  },
});

export default Profile;
