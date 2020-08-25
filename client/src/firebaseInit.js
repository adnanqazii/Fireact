import firebase from 'firebase/app';
import 'firebase/messaging';

var config = {
  apiKey: "AIzaSyAFz_Ywy9vPz1VZK6tAf8v7SXf6ARl-RCY",
  authDomain: "pushnotification-6b00d.firebaseapp.com",
  databaseURL: "https://pushnotification-6b00d.firebaseio.com",
  projectId: "pushnotification-6b00d",
  storageBucket: "pushnotification-6b00d.appspot.com",
  messagingSenderId: "376875590299",
  appId: "1:376875590299:web:eb5f1503fa7bc3f6e11c3e"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

// next block of code goes here
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