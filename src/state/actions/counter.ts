import { Action } from 'redux';

// Action type string constants
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// Action functions
export function incrementCounter(): CounterAction {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrementCounter(): Action {
  return {
    type: DECREMENT_COUNTER,
  };
}

// Action TS types
export interface IncrementCounter {
  type: typeof INCREMENT_COUNTER;
}

export interface DecrementCounter {
  type: typeof DECREMENT_COUNTER;
}

export type CounterAction = IncrementCounter | DecrementCounter;
