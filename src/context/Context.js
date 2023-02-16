import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.init';

const AuthContext = createContext();
const auth = getAuth(app);
const Context = ({ children }) => {

  const [user, setUser] = useState('');

  //create email and password authentication
  const createUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //verify email

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }

  //update user profile

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  }

  //sign in
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //sign out 
  const logOut = () => {
    return signOut(auth)
  }

  //auth state data modification
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    //return the unsbscribe
    return () => {
      unSubscribe();
    }
  }, []);

  const getInfo = { user, createUser, verifyEmail, updateUserProfile, login, logOut };

  return (
    <AuthContext.Provider value={getInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthState = () => {
  return useContext(AuthContext);
}

export default Context
