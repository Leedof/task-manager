import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();

export const appAPI = {
  authMe() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      });
    });
  },
  singOut() {
    return signOut(auth);
  },
  signInAPI(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  },
  signUpAPI(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  },
};
