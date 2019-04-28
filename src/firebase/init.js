import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAtD9zDmF1fbx7u1iK6e0ePfejXFLClM_Q',
  authDomain: 'depositos-869fb.firebaseapp.com',
  databaseURL: 'https://depositos-869fb.firebaseio.com',
  projectId: 'depositos-869fb',
  storageBucket: 'depositos-869fb.appspot.com',
  messagingSenderId: '957709294519'
}

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp.firestore()
