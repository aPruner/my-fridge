import React from 'react';
import { connect } from 'react-redux';

// Material UI imports
import { Button, Typography } from '@material-ui/core';

import { incrementCounter, decrementCounter } from '../state/actions/counter';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: React.FC = ({ count, incCounter, decCounter }: any) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Typography variant="h3">{count}</Typography>
      <Button onClick={incCounter}>Increment</Button>
      <Button onClick={decCounter}>Decrement</Button>
    </Layout>
  );
};

// TODO: Fix TS types
const mapStateToProps = (state: any): any => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: any): any => ({
  incCounter: () => dispatch(incrementCounter()),
  decCounter: () => dispatch(decrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
