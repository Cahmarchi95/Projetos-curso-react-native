import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import firebase from '../../services/FirebaseConnection';

export default function Login() {
  const [type, setType] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function clearForm() {
    setEmail('');
    setPassword('');
    Keyboard.dismiss();
  }

  function handleLogin() {
    if (type === 'login') {
      const user = firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user.user);
        })
        .catch(error => {
          console.log(error);
          alert('Algo deu errado');
          return;
        });
      clearForm();
    } else {
      const user = firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user.user);
        })
        .catch(error => {
          console.log(error);
          alert('Algo deu errado');
          return;
        });
      clearForm();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Seu email"
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="*******"
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={[
          styles.handleLogin,
          {backgroundColor: type === 'login' ? '#3ea6f2' : '#141414'},
        ]}
        onPress={handleLogin}>
        <Text style={styles.handleLoginText}>
          {type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setType(type => (type === 'login' ? 'cadastrar' : 'login'))
        }>
        <Text style={{textAlign: 'center'}}>
          {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#F2f6fc',
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414',
  },
  handleLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginBottom: 10,
  },
  handleLoginText: {
    color: '#FFFF',
    fontSize: 17,
  },
});
