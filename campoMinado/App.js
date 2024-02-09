import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import params from './src/params';
import Campo from './src/components/Campo';
import CampoMinado from './src/components/CampoMinado';
import {createMinedBoard} from './src/logica';

export default class App extends Component {
  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Campo Minado!!!</Text>
        <Text style={styles.instructions}>
          Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Campo />
        <Campo opened />
        <Campo opened nearMines={1} />
        <Campo opened nearMines={2} />
        <Campo opened nearMines={4} />
        <Campo opened nearMines={8} />
        <Campo mined />
        <Campo mined opened />
        <Campo mined opened exploded />
        <Campo flagged />
        <Campo flagged opened />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
