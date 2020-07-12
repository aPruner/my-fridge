import { Action } from 'redux';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../actions/auth';

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: Action): typeof state => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state };
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case LOGIN_FAILURE:
      return { ...state };
    case LOGOUT_REQUEST:
      return { ...state };
    case LOGOUT_SUCCESS:
      return { ...state, isLoggedIn: false };
    case LOGOUT_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
