import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {ModalFilme} from './../Modal/index';

export default function Filme({data}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [filmes, setFilmes] = useState(data);
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>
        <Image source={{uri: data.foto}} style={styles.capa} />

        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalFilme
          filmes={filmes}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    padding: 15,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  buttonArea: {
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9,
  },
  button: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
