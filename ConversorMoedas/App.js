import {SafeAreaView, Text, StyleSheet} from 'react-native';
import React from 'react';
import Conversor from './src/Conversor/index';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Conversor propMoedaA="USD" propMoedaB="BRL" />
      <Conversor propMoedaA="EUR" propMoedaB="BRL" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
