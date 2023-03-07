import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

export const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUpUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
