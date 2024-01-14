import { initializeApp } from 'firebase/app';
import 'firebase/auth'
import firebase from '../../node_modules/firebase/index';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
  };       

       
export default firebase