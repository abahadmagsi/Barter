import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/Navigations/TabNavigator';
import StackNavigator from './src/Navigations/StackNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
