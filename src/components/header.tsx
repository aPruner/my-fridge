import React from 'react';
import { Link } from 'gatsby';

// Material UI imports
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import {
  AppToolBarBackgroundColor,
  AppToolBarTextColor,
} from '../assets/styles/colors';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolBar: {
      backgroundColor: AppToolBarBackgroundColor,
    },
    title: {
      flexGrow: 1,
      textDecoration: `none`,
      color: AppToolBarTextColor,
    },
    signinButton: {
      textTransform: `none`,
    },
  })
);

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }: HeaderProps) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Link to="/" className={classes.title}>
            <Typography variant="h6">{siteTitle}</Typography>
          </Link>
          <Button className={classes.signinButton} color="inherit">
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

interface HeaderProps {
  siteTitle: string;
}

export default Header;
