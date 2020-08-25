importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js');

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

messaging.setBackgroundMessageHandler(function(payload) {
  
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});
