import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  Dialog,
  DialogTitle,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: 800,
    width: 2000,
  },
});

const SingleShoppingList: React.FC<SingleShoppingList> = ({
  open,
  onClose,
}) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const shoppingListItems = [
    { item: 'item 1', id: 1 },
    { item: 'item 2', id: 2 },
    { item: 'item 3', id: 3 },
    { item: 'item 4', id: 4 },
    { item: 'item 5', id: 5 },
    { item: 'item 6', id: 6 },
    { item: 'item 7', id: 7 },
    { item: 'item 8', id: 8 },
    { item: 'item 9', id: 9 },
  ];

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      PaperProps={{ classes: { root: classes.root } }}
    >
      <DialogTitle className="shoppingListTitle" id="simple-dialog-title">
        Shopping List Static Data
      </DialogTitle>
      <List>
        {shoppingListItems.map((shoppingListItem) => {
          return (
            <ListItem
              key={shoppingListItem.id}
              role={undefined}
              dense
              button
              onClick={handleToggle(shoppingListItem.id)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(shoppingListItem.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': `checkbox-list-label-${shoppingListItem.id}`,
                  }}
                />
              </ListItemIcon>
              <ListItemText>{shoppingListItem.item}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Dialog>
  );
};

export interface SingleShoppingList {
  open: boolean;
  onClose: () => void;
}

export default SingleShoppingList;
