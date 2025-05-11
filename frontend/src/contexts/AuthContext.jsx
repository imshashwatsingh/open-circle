import React, { useReducer, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, db } from '../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { AUTH_ACTIONS, AUTH_ERRORS } from './authConstants';
import { initialAuthState, authReducer } from './authState';
import { AuthContext } from './AuthContextContext';

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const navigate = useNavigate();

  const handleAuthError = useCallback((error) => {
    let message = AUTH_ERRORS.GENERIC_ERROR;
    switch (error.code) {
      case 'auth/email-already-in-use':
        message = AUTH_ERRORS.EMAIL_IN_USE;
        break;
      case 'auth/weak-password':
        message = AUTH_ERRORS.WEAK_PASSWORD;
        break;
      case 'auth/invalid-credential':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        message = AUTH_ERRORS.INVALID_CREDENTIALS;
        break;
      default:
        // fallback
        break;
    }
    dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: message });
  }, []);

  useEffect(() => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            dispatch({
              type: AUTH_ACTIONS.SET_USER,
              payload: { ...user, ...docSnap.data() }
            });
          } else {
            dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user });
          }
        } catch {
          dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user });
        }
      } else {
        dispatch({ type: AUTH_ACTIONS.SET_USER, payload: null });
      }
      // Always set loading to false, even if error occurs
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
    }, () => {
      // Handle auth state change errors gracefully
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: AUTH_ERRORS.GENERIC_ERROR });
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
    });
    return () => unsubscribe();
  }, []);

  const signup = useCallback(async (email, password, displayName) => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        displayName,
        email,
        createdAt: new Date(),
        skills: [],
        interests: [],
      });
      navigate('/dashboard');
      return userCredential;
    } catch (error) {
      handleAuthError(error);
      throw error;
    } finally {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
    }
  }, [navigate, handleAuthError]);

  const signin = useCallback(async (email, password) => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
      const result = await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
      return result;
    } catch (error) {
      handleAuthError(error);
      throw error;
    } finally {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
    }
  }, [navigate, handleAuthError]);

  const signInWithGoogle = useCallback(async () => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
      const result = await signInWithPopup(auth, googleProvider);
      const userRef = doc(db, 'users', result.user.uid);
      const docSnap = await getDoc(userRef);
      if (!docSnap.exists()) {
        await setDoc(userRef, {
          displayName: result.user.displayName,
          email: result.user.email,
          createdAt: new Date(),
          skills: [],
          interests: [],
          photoURL: result.user.photoURL
        });
      }
      navigate('/dashboard');
      return result;
    } catch (error) {
      handleAuthError(error);
      throw error;
    } finally {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
    }
  }, [navigate, handleAuthError]);

  const signout = useCallback(async () => {
    try {
      await signOut(auth);
      dispatch({ type: AUTH_ACTIONS.CLEAR_STATE });
      navigate('/');
    } catch (error) {
      handleAuthError(error);
      throw error;
    }
  }, [navigate, handleAuthError]);

  const value = {
    user: state.user,
    loading: state.loading,
    error: state.error,
    signup,
    signin,
    signInWithGoogle,
    signout
  };

  // Always render children, let ProtectedRoute handle loading
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
