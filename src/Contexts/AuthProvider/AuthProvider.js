import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log(currentUser);
    });

    return () => {
      unSubscribe();
    }
  },[]);

  const signWithEmailPass = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };
  const GoogleAuth = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const emailPassRegister = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

    const authInfo = {GoogleAuth, user, logOut, signWithEmailPass, emailPassRegister};

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider