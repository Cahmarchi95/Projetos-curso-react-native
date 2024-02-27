import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyDGYnsO2hv69K2x7tBuJd8kJTxgJbHv4aE',
  authDomain: 'tarefas-248ac.firebaseapp.com',
  projectId: 'tarefas-248ac',
  storageBucket: 'tarefas-248ac.appspot.com',
  messagingSenderId: '117218774009',
  appId: '1:117218774009:web:c201d11bfa612e82158b28',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
