// LOGIN:
// Action type string constants
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action functions
export function loginRequest(): LoginRequest {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess(): LoginSuccess {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure(): LoginFailure {
  return {
    type: LOGIN_FAILURE,
  };
}

// Action TS types
export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
}

export interface LoginFailure {
  type: typeof LOGIN_FAILURE;
}

export type LoginAction = LoginRequest | LoginSuccess | LoginFailure;

// LOGOUT:
// Action type string constants
export const LOGOUT_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_FAILURE = 'LOGIN_FAILURE';

// Action functions
export function logoutRequest(): LoginRequest {
  return {
    type: LOGIN_REQUEST,
  };
}

export function logoutSuccess(): LoginSuccess {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function logoutFailure(): LoginFailure {
  return {
    type: LOGIN_FAILURE,
  };
}

// Action TS types
export interface LogoutRequest {
  type: typeof LOGIN_REQUEST;
}

export interface LogoutSuccess {
  type: typeof LOGIN_SUCCESS;
}

export interface LogoutFailure {
  type: typeof LOGIN_FAILURE;
}

export type LogoutAction = LogoutRequest | LogoutSuccess | LogoutFailure;
