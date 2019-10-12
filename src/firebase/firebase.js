import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAfX6XK_o9hti6HFZ2hjQa4l58J-uopwLw',
  authDomain: 'e-commerce-a2ab7.firebaseapp.com',
  databaseURL: 'https://e-commerce-a2ab7.firebaseio.com',
  projectId: 'e-commerce-a2ab7',
  storageBucket: 'e-commerce-a2ab7.appspot.com',
  messagingSenderId: '424770424348',
  appId: '1:424770424348:web:8545436d84c83f0b7dd9d9',
  measurementId: 'G-K591QTXCE6'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.error('error creating user', err.message);
    }
  }
  return userRef;
};

export default firebase;
