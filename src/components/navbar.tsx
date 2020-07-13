import React from 'react';
import { navigate } from 'gatsby';

// Material UI imports
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  Kitchen as FridgeIcon,
} from '@material-ui/icons';

const useStyles = makeStyles(() =>
  createStyles({
    paper: { width: '300px' },
  })
);

const Navbar: React.FC<NavbarProps> = ({ open, onClose }) => {
  const classes = useStyles();
  const navItems = [
    {
      pageName: 'Home',
      pageIcon: <HomeIcon fontSize="large" />,
      endpoint: '/',
    },
    {
      pageName: 'Shopping Lists',
      pageIcon: <ShoppingCartIcon fontSize="large" />,
      endpoint: '/shoppingLists/',
    },
    {
      pageName: 'Fridge',
      pageIcon: <FridgeIcon fontSize="large" />,
      endpoint: '/fridge/',
    },
  ];

  const navigation = (endpoint: string): void => {
    navigate(endpoint);
  };

  return (
    <Drawer
      classes={{ paper: classes.paper }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <List>
        {navItems.map((navItem) => {
          return (
            <ListItem
              button
              key={navItem.pageName}
              onClick={() => navigation(navItem.endpoint)}
            >
              <ListItemIcon>{navItem.pageIcon}</ListItemIcon>
              <ListItemText>{navItem.pageName}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export interface NavbarProps {
  open: boolean;
  onClose: () => void;
}

export default Navbar;
