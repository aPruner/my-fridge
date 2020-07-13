export async function signinWithGoogle(
  app: firebase.app.App,
  googleAuthProvider: firebase.auth.GoogleAuthProvider
): Promise<firebase.auth.UserCredential> {
  try {
    return await app.auth().signInWithPopup(googleAuthProvider);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function signinWithUsernamePassword(
  app: firebase.app.App
): Promise<void> {
  // TODO: Need to enable username/password sign up and signin in firebase console before writing this function
}

export async function signOut(app: firebase.app.App): Promise<void> {
  try {
    return await app.auth().signOut();
  } catch (error) {
    console.log(error);
    return error;
  }
}
