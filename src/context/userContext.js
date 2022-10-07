import React, { useState, createContext, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
export const UserContext = createContext();

export default function UserContextProvider(props) {
  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);
  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoadingData(false);
    });

    return unsubscribe;
  }, []);

  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });

  const toggleModal = (mode) => {
    if (mode === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
      });
    }
    if (mode === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true,
      });
    }
    if (mode === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ modalState, toggleModal, currentUser, signUp, logout, signIn }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
