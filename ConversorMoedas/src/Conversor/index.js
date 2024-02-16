import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import api from '../services/api';

export default function Conversor({propMoedaA, propMoedaB}) {
  const [moedaA, setMoedaA] = useState(propMoedaA);
  const [moedaB, setMoedaB] = useState(propMoedaB);
  const [moedaB_valor, setMoedaB_valor] = useState(0);
  const [valorConvertido, setValorConvertido] = useState(0);
  const [title, setTitle] = useState('');

  async function handleConversion() {
    let de_para = `${moedaA}-${moedaB}`;
    let moeda = `${moedaA}${moedaB}`;
    const response = await api.get(`json/last/${de_para}`);
    let cotacao = response.data[moeda].low;
    let name = response.data[moeda].name;
    let resultado = cotacao * parseFloat(moedaB_valor);
    setTitle(name);
    setValorConvertido(resultado.toFixed(2));
    //fechar teclado automaticamente
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {propMoedaA} para {propMoedaB}
      </Text>
      <TextInput
        placeholder="Valor a ser convertido"
        style={styles.areaInput}
        onChangeText={moedaB_valor => {
          setMoedaB_valor(moedaB_valor);
        }}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.buttonArea} onPress={handleConversion}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>
      <Text style={styles.convertedValue}>{title}</Text>
      <Text style={styles.convertedValue}>
        {valorConvertido === 0 ? '' : `R$ ${valorConvertido}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 30, fontWeight: 'bold', color: '#000'},
  areaInput: {
    width: 280,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    color: '#000',
    borderRadius: 5,
  },
  buttonArea: {
    width: 150,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2cb360',
    marginTop: 30,
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },
  convertedValue: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
});
