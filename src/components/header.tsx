import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';

// Material UI imports
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import SigninDialog from './signinDialog';
import Navbar from './navbar';

import { loginAction, logoutAction } from '../state/actions/auth';

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

const Header: React.FC<HeaderProps> = ({
  siteTitle = '',
  signinAction,
  signoutAction,
}: HeaderProps) => {
  const classes = useStyles();

  const [signinDialogOpen, setSigninDialogOpen] = React.useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const handleOpenSigninDialog = (): void => {
    setSigninDialogOpen(true);
  };

  const handleCloseSignDialog = (): void => {
    setSigninDialogOpen(false);
  };

  const handleOpenNavbar = (): void => {
    setNavbarOpen(true);
  };

  const handleCloseNavbar = (): void => {
    setNavbarOpen(false);
  };

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenNavbar}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.title}>
            <Typography variant="h6">{siteTitle}</Typography>
          </Link>
          <Button
            className={classes.signinButton}
            color="inherit"
            onClick={handleOpenSigninDialog}
          >
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
      <SigninDialog
        open={signinDialogOpen}
        onClose={handleCloseSignDialog}
        onGoogleLoginButtonClick={() => signinAction(true)}
      />
      <Navbar open={navbarOpen} onClose={handleCloseNavbar} />
    </header>
  );
};

export interface HeaderProps {
  siteTitle: string;
  isLoggedIn: boolean;
  signinAction: (withGoogle: boolean) => void;
  signoutAction: () => void;
}

export interface HeaderStateMapping {
  isLoggedIn: boolean;
}

export interface HeaderDispatchMapping {
  signinAction: (withGoogle: boolean) => void;
  signoutAction: () => void;
}

const mapStateToProps = (state: HeaderStateMapping): HeaderStateMapping => ({
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = (
  // TODO: Fix this any ts type
  dispatch: Dispatch<any>
): HeaderDispatchMapping => ({
  signinAction: (withGoogle: boolean) => dispatch(loginAction(withGoogle)),
  signoutAction: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
