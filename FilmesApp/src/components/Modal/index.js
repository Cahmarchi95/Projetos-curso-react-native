import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';

export function ModalFilme({filmes, handleClose}) {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>Sinopse</Text>

        <Text style={styles.text}>{filmes.sinopse}</Text>

        <View style={styles.areaButtons}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(24,24,24,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#FFFF',
    width: '90%',
    paddingBottom: 40,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },

  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  areaButtons: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 8,
    alignItems: 'center',
  },
  button: {
    flexGrow: 1,
    backgroundColor: '#09A6FF',
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});
