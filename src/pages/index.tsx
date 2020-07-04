import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

// Material UI imports
import { Button, Typography } from '@material-ui/core';

import {
  incrementCounter,
  decrementCounter,
  CounterAction,
} from '../state/actions/counter';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: React.FC<IndexProps> = ({
  count,
  incCounter,
  decCounter,
}: IndexProps) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Typography variant="h3">{count}</Typography>
      <Button onClick={incCounter}>Increment</Button>
      <Button onClick={decCounter}>Decrement</Button>
    </Layout>
  );
};

export interface IndexStateMapping {
  count: number;
}

export interface IndexDispatchMapping {
  incCounter: React.MouseEventHandler<HTMLElement>;
  decCounter: React.MouseEventHandler<HTMLElement>;
}

export interface IndexProps {
  count: number;
  incCounter: React.MouseEventHandler<HTMLElement>;
  decCounter: React.MouseEventHandler<HTMLElement>;
}

const mapStateToProps = (state: IndexStateMapping): IndexStateMapping => ({
  count: state.count,
});

const mapDispatchToProps = (
  dispatch: Dispatch<CounterAction>
): IndexDispatchMapping => ({
  incCounter: () => dispatch(incrementCounter()),
  decCounter: () => dispatch(decrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
