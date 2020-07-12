import LayoutRenderer from './src/components/layoutRenderer';
import wrapWithProvider from './src/state/providerWrapper';

export const wrapRootElement = wrapWithProvider;
export const replaceComponentRenderer = ({ props, component }) => {
  return LayoutRenderer({ props, component });
};
