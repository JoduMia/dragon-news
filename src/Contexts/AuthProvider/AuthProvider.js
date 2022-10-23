import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    }
  },[]);

  const signWithEmailPass = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const GoogleAuth = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const emailPassRegister = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

    const authInfo = {
      GoogleAuth,
      user,
      logOut,
      signWithEmailPass,
      emailPassRegister,
      loading,
      updateUserInfo
    };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider