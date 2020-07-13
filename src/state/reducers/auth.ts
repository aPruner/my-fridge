import firebase from '../../utils/services/firebase';
import { isBrowser } from '../../utils/browser';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../actions/auth';

const initialState = {
  firebaseApp: isBrowser() ? firebase : {},
  googleAuthProvider: isBrowser() ? new firebase.auth.GoogleAuthProvider() : {},
  user: {},
};

const authReducer = (state = initialState, action: any): typeof state => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state };
    case LOGIN_SUCCESS:
      return { ...state, user: action.credential.user };
    case LOGIN_FAILURE:
      return { ...state };
    case LOGOUT_REQUEST:
      return { ...state };
    case LOGOUT_SUCCESS:
      return { ...state };
    case LOGOUT_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
