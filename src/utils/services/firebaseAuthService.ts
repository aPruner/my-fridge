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

function initFirebaseAuth(): Promise<firebase.app.App> {
  const config = getFirebaseConfig();
  return import('firebase').then((firebase) => {
    return firebase.initializeApp(config);
  });
}

function initGoogleAuthProvider(): Promise<firebase.auth.GoogleAuthProvider> {
  return import('firebase/auth').then((fbAuth) => {
    return new fbAuth.auth.GoogleAuthProvider();
  });
}

export async function signinWithGoogle(): Promise<
  firebase.auth.UserCredential
> {
  // Initialize the firebase app and do the login
  const app = await initFirebaseAuth();
  const googleAuthProvider = await initGoogleAuthProvider();
  try {
    return await app.auth().signInWithPopup(googleAuthProvider);
  } catch (error) {
    return error;
  }
}

export async function signinWithUsernamePassword(): Promise<void> {
  // TODO: Need to enable username/password sign up and signin in firebase console before writing this function
  const app = await initFirebaseAuth();
}

export async function signOut(): Promise<void> {
  const app = await initFirebaseAuth();
  try {
    return await app.auth().signOut();
  } catch (error) {
    return error;
  }
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
