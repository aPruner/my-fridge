import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

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

import { AuthAction, loginAction, logoutAction } from '../state/actions/auth';

const SigninDialog: React.FC<SigninDialogProps> = ({
  open,
  onClose,
  isLoggedIn,
  signinAction,
  signoutAction,
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
          <GoogleButton onClick={() => signinAction(true)} />
        </ListItem>
      </List>
    </Dialog>
  );
};

export interface SigninDialogProps {
  open: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  signinAction: (withGoogle: boolean) => void;
  signoutAction: () => void;
}

export interface SigninDialogStateMapping {
  isLoggedIn: boolean;
}

export interface SigninDialogDispatchMapping {
  signinAction: (withGoogle: boolean) => void;
  signoutAction: () => void;
}

const mapStateToProps = (
  state: SigninDialogStateMapping
): SigninDialogStateMapping => ({
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = (
  // TODO: Fix this any ts type
  dispatch: Dispatch<any>
): SigninDialogDispatchMapping => ({
  signinAction: (withGoogle: boolean) => dispatch(loginAction(withGoogle)),
  signoutAction: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninDialog);
