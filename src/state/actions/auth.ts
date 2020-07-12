import { Dispatch } from 'react';

import { signinWithGoogle, signOut } from '../../utils/services/authService';

// LOGIN:

// Login async action
export function loginAction(withGoogle: boolean): LoginAsyncAction {
  return (dispatch: Dispatch<LoginAction>): void => {
    dispatch(loginRequest());
    if (withGoogle) {
      signinWithGoogle()
        .then((credential) => {
          dispatch(loginSuccess(credential));
          console.log(credential);
        })
        .catch((error) => {
          dispatch(loginFailure());
          console.log(error);
        });
    } else {
      // TODO: Fill in login with user/pass once it's implemented
    }
  };
}

// Action type string constants
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action function wrappers
export function loginRequest(): LoginRequest {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess(
  credential: firebase.auth.UserCredential
): LoginSuccess {
  return {
    type: LOGIN_SUCCESS,
    credential,
  };
}

export function loginFailure(): LoginFailure {
  return {
    type: LOGIN_FAILURE,
  };
}

// Action TS types
export interface LoginAsyncAction {
  (dispatch: Dispatch<LoginAction>): void;
}

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  credential: firebase.auth.UserCredential;
}

export interface LoginFailure {
  type: typeof LOGIN_FAILURE;
}

export type LoginAction = LoginRequest | LoginSuccess | LoginFailure;

// LOGOUT:

// Logout async action
export function logoutAction(): LogoutAsyncAction {
  return (dispatch: Dispatch<LogoutAction>): void => {
    dispatch(logoutRequest());
    signOut()
      .then(() => {
        dispatch(logoutSuccess());
        console.log('logout success!');
      })
      .catch((error) => {
        dispatch(logoutFailure());
        console.log(error);
      });
  };
}

// Action type string constants
export const LOGOUT_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_FAILURE = 'LOGIN_FAILURE';

// Action function wrappers
export function logoutRequest(): LogoutRequest {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function logoutSuccess(): LogoutSuccess {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutFailure(): LogoutFailure {
  return {
    type: LOGOUT_FAILURE,
  };
}

// Action TS types
export interface LogoutAsyncAction {
  (dispatch: Dispatch<LogoutAction>): void;
}

export interface LogoutRequest {
  type: typeof LOGOUT_REQUEST;
}

export interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}

export interface LogoutFailure {
  type: typeof LOGOUT_FAILURE;
}

export type LogoutAction = LogoutRequest | LogoutSuccess | LogoutFailure;
export type AuthAction =
  | LoginAction
  | LogoutAction
  | LogoutAsyncAction
  | LogoutAsyncAction;
