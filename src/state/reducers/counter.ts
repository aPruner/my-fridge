import { Action } from 'redux';

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action: Action): typeof state => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
