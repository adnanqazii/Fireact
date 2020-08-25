import admin from 'firebase-admin';

import { googleApplicationCredentials } from './settings'

const serviceAccount = require(googleApplicationCredentials);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'postgres://mqpxenpo:z7Y48gh8CG-nO4H3mblIw8K8vvRyCcyL@lallah.db.elephantsql.com:5432/mqpxenpo'
});

export const messaging = admin.messaging();