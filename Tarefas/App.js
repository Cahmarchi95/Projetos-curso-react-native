import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Login from './src/components/Login/index';

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Dentro da tela tarefas</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#F2f6fc',
  },
});
