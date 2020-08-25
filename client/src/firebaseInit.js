import firebase from 'firebase/app';
import 'firebase/messaging';

var config = {
  apiKey: "AIzaSyBhmRJRNi1sw62jGPJ8pUu4Eq_1U_AlnHs",
  authDomain: "firereact-51904.firebaseapp.com",
  databaseURL: "https://firereact-51904.firebaseio.com",
  projectId: "firereact-51904",
  storageBucket: "firereact-51904.appspot.com",
  messagingSenderId: "505841219537",
  appId: "1:505841219537:web:1d5d466e05263bc90952f0"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
