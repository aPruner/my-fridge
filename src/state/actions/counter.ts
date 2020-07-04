import { Action } from 'redux';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function incrementCounter(): Action {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrementCounter(): Action {
  return {
    type: DECREMENT_COUNTER,
  };
}
