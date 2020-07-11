import React from 'react';
import {
  TextField,
  Dialog,
  DialogTitle,
  ListItem,
  List,
  Button,
} from '@material-ui/core';

const SingleShoppingList: React.FC<SingleShoppingList> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle className="shoppingListTitle" id="simple-dialog-title">
        Shopping List Static Data
      </DialogTitle>
      <List>
        <ListItem>
          <TextField label="Username" />
        </ListItem>
        <ListItem>
          <TextField label="Password" type="password" />
        </ListItem>
        <ListItem>
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </ListItem>
      </List>
    </Dialog>
  );
};

export interface SingleShoppingList {
  open: boolean;
  onClose: () => void;
}

export default SingleShoppingList;
