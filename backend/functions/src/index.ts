import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
// import { errorHandler, notFound } from './middleware/errorMiddleware.js';

//initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);

dotenv.config();

//initialize express server
const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

//initialize the database and the collection 
const db = admin.firestore();
const userCollection = 'users';

app.get('/', (req, res) => {
    res.send('API is running ...');
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const webAPI = functions.https.onRequest(app)
