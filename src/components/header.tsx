import React from 'react';
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
      <SigninDialog open={signinDialogOpen} onClose={handleCloseSignDialog} />
      <Navbar open={navbarOpen} onClose={handleCloseNavbar} />
    </header>
  );
};

interface HeaderProps {
  siteTitle: string;
}

export default Header;
