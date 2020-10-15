import dotenv from 'dotenv'
dotenv.config()

import admin from 'firebase-admin'
import Utils from '../src/utils.js'

// Set whether you are targeting prod or not
const prod = false

let serviceAccount, databaseURL

if (prod) {
  serviceAccount = await Utils.readJsonFromFile('secrets/serviceAccountKey_production.json')
  databaseURL = process.env.prod_FIREBASE_DATABASE_URL
} else {
  serviceAccount = await Utils.readJsonFromFile('secrets/serviceAccountKey_test.json')
  databaseURL = process.env.test_FIREBASE_DATABASE_URL
}

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL
})

const fs = app.firestore()
const db = app.database()

export { fs, db, admin }
