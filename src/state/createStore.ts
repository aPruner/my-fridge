import { createStore as reduxCreateStore, Store } from 'redux';
import counterReducer from './reducers/counter';

const createStore = (): Store => reduxCreateStore(counterReducer);
export default createStore;
