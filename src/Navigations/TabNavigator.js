import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NotAvialable from '../Screens/NotAvailable';
import MyAds from '../Screens/MyAds';
import Profile from '../Screens/Profile';
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#ffff',
          height: 70,
          position: 'absolute',
          right: 1,
          left: 1,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused ? styles.focusedViewStyle : styles.iconNonFocusStyle
              }>
              <Icon
                name="home"
                color={focused ? 'white' : 'gray'}
                size={focused ? 30 : 25}
                style={focused ? styles.iconFocusedStyle : null}
              />
              <Text style={styles.textStyle}>{focused ? 'HOME' : null}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="myads"
        component={MyAds}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused ? styles.focusedViewStyle : styles.iconNonFocusStyle
              }>
              <Icon
                name="shopping-bag"
                color={focused ? 'white' : 'gray'}
                size={focused ? 30 : 25}
                style={focused ? styles.iconFocusedStyle : null}
              />
              <Text style={styles.textStyle}>{focused ? 'MY ADS' : null}</Text>
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Favourite"
        component={NotAvialable}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused ? styles.focusedViewStyle : styles.iconNonFocusStyle
              }>
              <Icon
                name="star"
                color={focused ? 'white' : 'gray'}
                size={focused ? 30 : 25}
                style={focused ? styles.iconFocusedStyle : null}
              />
              <Text style={styles.textStyle}>{focused ? 'SELL' : null}</Text>
            </View>
          ),
        }}
      /> */}

      <Tab.Screen
        name="Notifications"
        component={NotAvialable}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused ? styles.focusedViewStyle : styles.iconNonFocusStyle
              }>
              <Icon
                name="notifications"
                color={focused ? 'white' : 'gray'}
                size={focused ? 30 : 25}
                style={focused ? styles.iconFocusedStyle : null}
              />
              <Text style={styles.textStyle}>{focused ? 'Noti' : null}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused ? styles.focusedViewStyle : styles.iconNonFocusStyle
              }>
              <Icon
                name="person"
                color={focused ? 'white' : 'gray'}
                size={focused ? 30 : 25}
                style={focused ? styles.iconFocusedStyle : null}
              />
              <Text style={styles.textStyle}>{focused ? 'ACCOUNT' : null}</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  focusedViewStyle: {
    width: 100,
    height: 130,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 15,
  },
  iconNonFocusStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  iconFocusedStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'tomato',
    borderRadius: 50,
  },
  textStyle: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default TabNavigator;
