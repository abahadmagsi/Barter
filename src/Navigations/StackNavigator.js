import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from '../Screens/ProductScreen';
import TabNavigator from './TabNavigator';
import ExchangeOfferScreen from '../Screens/ExchangeOfferScreen';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen
        name="ExchangeOfferScreen"
        component={ExchangeOfferScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
