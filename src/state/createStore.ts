import {
  createStore as reduxCreateStore,
  Store,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import counterReducer from './reducers/counter';
import authReducer from './reducers/auth';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  counterReducer,
  authReducer,
});

const createStore = (): Store =>
  reduxCreateStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
export default createStore;
