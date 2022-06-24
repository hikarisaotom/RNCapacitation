import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useReducer, useEffect} from 'react';
import {
  Usuario,
  LoginResponse,
  LoginData,
  RegisterData,
} from '../interfaces/appInterfaces';
import React from 'react';
import {authReducer, AuthState} from './authReducer';
import cafeApi from '../api/cafeApi';

//Type of information that the children of the context will see
type AuthContextprops = {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  token: string | null;
  user: Usuario | null;
  errorMessage: string;
  signUp: (data: RegisterData) => void;
  signIn: (data: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

//initial state of the app that will be handled by the reducer
const AuthInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};
//Create the context with the type of props or data that will be share to the children
export const AuthContext = createContext({} as AuthContextprops);

//we create the provider of the context, this will contain the children components

export const AuthProvider = ({children}: any) => {
  {
    /* connecting the reducer with the state
we have the state, when something happends then we trigger the dispatch
this dispatch will be caught by the  reducer wich will execute the acction and return a new state*/
  }
  const [state, dispatch] = useReducer(authReducer, AuthInitialState);
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    //there is no token,not autenticated
    if (!token) return dispatch({type: 'notAuthenticated'});

    //validate token
    const resp = await cafeApi.get('/auth');
    if (resp.status !== 200) {
      return dispatch({type: 'notAuthenticated'});
    }

    dispatch({
      type: 'signUp',
      payload: {
        token: resp.data.token,
        user: resp.data.usuario,
      },
    });
  };
  const signIn = async ({correo, password}: LoginData) => {
    try {
      const resp = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });
      dispatch({
        type: 'signUp',
        payload: {
          token: resp.data.token,
          user: resp.data.usuario,
        },
      });
      await AsyncStorage.setItem('token', resp.data.token);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Not valid info',
      });
    }
  };

  const signUp = async ({nombre, correo, password}: RegisterData) => {
    try {
      const {data} = await cafeApi.post<LoginResponse>('/usuarios', {
        correo,
        password,
        nombre,
      });
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
          user: data.usuario,
        },
      });

      await AsyncStorage.setItem('token', data.token);
    } catch (error) {
      dispatch({
        type: 'addError',
        payload: error.response.data.errors[0].msg || 'Revise la información',
      });
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
  };
  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  return (
    //this is the context we created before
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
