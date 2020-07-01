import React from 'react';
import {
  TextField,
  Dialog,
  DialogTitle,
  ListItem,
  List,
  Button,
} from '@material-ui/core';
import GoogleButton from 'react-google-button';

const SigninDialog: React.FC<SigninDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle className="signInTitle" id="simple-dialog-title">
        Sign in
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
        <ListItem>
          <GoogleButton />
        </ListItem>
      </List>
    </Dialog>
  );
};

export interface SigninDialogProps {
  open: boolean;
  onClose: () => void;
}

export default SigninDialog;
