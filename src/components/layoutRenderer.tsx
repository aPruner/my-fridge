import React from 'react';
import Layout from './layout';

const LayoutRenderer: React.FC<LayoutRendererProps> = ({
  props,
  component,
}) => {
  return <Layout>{React.createElement(component, props)}</Layout>;
};
export interface LayoutRendererProps {
  props: any;
  component: any;
}
export default LayoutRenderer;
