import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Add as AddIcon } from '@material-ui/icons';
import { Fab } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ShoppingListGrid from '../components/shoppingListGrid';

const useStyles = makeStyles(() =>
  createStyles({
    fab: {
      margin: 0,
      top: 'auto',
      right: 60,
      bottom: 60,
      left: 'auto',
      position: 'fixed',
    },
  })
);

const ShoppingListsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <Fab className={classes.fab} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <ShoppingListGrid />
    </Layout>
  );
};

export default ShoppingListsPage;
