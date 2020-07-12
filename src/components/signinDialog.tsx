import React, { Dispatch } from 'react';

// Material UI imports
import {
  TextField,
  Dialog,
  DialogTitle,
  ListItem,
  List,
  Button,
} from '@material-ui/core';

import GoogleButton from 'react-google-button/dist/react-google-button';

const SigninDialog: React.FC<SigninDialogProps> = ({
  open,
  onClose,
  onGoogleLoginButtonClick,
}) => {
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
          <GoogleButton onClick={onGoogleLoginButtonClick} />
        </ListItem>
      </List>
    </Dialog>
  );
};

export interface SigninDialogProps {
  open: boolean;
  onClose: () => void;
  onGoogleLoginButtonClick: () => void;
}

export default SigninDialog;
