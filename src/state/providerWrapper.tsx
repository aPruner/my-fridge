import React from 'react';
import { Provider } from 'react-redux';

import createStore from './createStore';

import { isBrowser } from '../utils/browser';

// eslint-disable-next-line react/display-name,react/prop-types
const wrapWithProvider: React.FC<ProviderProps> = ({
  element,
}: ProviderProps) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore();
  return isBrowser() ? <Provider store={store}>{element}</Provider> : element;
};

export interface ProviderProps {
  element: React.FC;
}

export default wrapWithProvider;
