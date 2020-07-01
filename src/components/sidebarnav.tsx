import React from 'react';

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
  Kitchen as KitchenIcon,
} from '@material-ui/icons';

const useStyles = makeStyles(() =>
  createStyles({
    paper: { width: '300px' },
  })
);
const Sidebarnav: React.FC<SidebarnavProps> = ({ open, onClose }) => {
  const classes = useStyles();
  return (
    <Drawer
      classes={{ paper: classes.paper }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon fontSize="large" />
            <ListItemText>Home</ListItemText>
          </ListItemIcon>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon fontSize="large" />
            <ListItemText>Shopping List</ListItemText>
          </ListItemIcon>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <KitchenIcon fontSize="large" />
            <ListItemText>Fridge</ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export interface SidebarnavProps {
  open: boolean;
  onClose: () => void;
}

export default Sidebarnav;
