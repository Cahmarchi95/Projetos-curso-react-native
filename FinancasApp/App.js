import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/index';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
