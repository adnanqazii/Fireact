import admin from 'firebase-admin';

import { googleApplicationCredentials } from './settings';

const serviceAccount = require(googleApplicationCredentials);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://firereact-51904.firebaseio.com',
});

export const messaging = admin.messaging();
