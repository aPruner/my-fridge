import { initializeApp } from 'firebase/app';
import firebase from 'firebase';

function getFirebaseConfig(): FirebaseConfig {
  return {
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_FIREBASE_APP_ID,
    measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
  };
}

function initFirebaseAuth(): firebase.app.App {
  const config = getFirebaseConfig();
  return initializeApp(config);
}

export async function signinWithGoogle(): Promise<
  firebase.auth.UserCredential
> {
  // Initialize the firebase app and do the login
  const app = initFirebaseAuth();
  try {
    return await app
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
  } catch (error) {
    return error;
  }
}

export function signinWithUsernamePassword(): void {
  // TODO: Need to enable username/password sign up and signin in firebase console before writing this function
  const auth = initFirebaseAuth();
}

export interface FirebaseConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
}