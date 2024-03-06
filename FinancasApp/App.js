import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}