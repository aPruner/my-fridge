import React from 'react';
import { Link } from 'gatsby';

// Material UI imports
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import SigninDialog from './signinDialog';

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Link to="/" className={classes.title}>
            <Typography variant="h6">{siteTitle}</Typography>
          </Link>
          <Button
            className={classes.signinButton}
            color="inherit"
            onClick={handleClickOpen}
          >
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
      <SigninDialog open={open} onClose={handleClose} />
    </header>
  );
};

interface HeaderProps {
  siteTitle: string;
}

export default Header;
