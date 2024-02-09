import React from 'react';
import {View, StyleSheet} from 'react-native';
import Campo from './Campo';

export default props => {
  const rows = props.board.map((row, indiceR) => {
    const columns = row.map((field, indiceC) => {
      return <Campo {...field} key={indiceC} />;
    });
    return <View key={indiceR}>{columns}</View>;
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EEE',
  },
});
