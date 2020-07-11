import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';

import SingleShoppingList from './singleShoppingList';

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    marginBottom: 35,
  },
  cardActionArea: {
    height: 75,
  },
});

const ShoppingListGrid: React.FC = () => {
  const [shoppingListDialogOpen, setShoppingListDialogOpen] = React.useState(
    false
  );
  const handleOpenShoppingListDialog = (): void => {
    setShoppingListDialogOpen(true);
  };

  const handleCloseShoppinglistDialog = (): void => {
    setShoppingListDialogOpen(false);
  };
  const classes = useStyles();
  // TODO: This is just mock data with a name, add real data later
  const shoppingCards = [
    { shoppingListName: 'Shopping List 1' },
    { shoppingListName: 'Shopping List 2' },
    { shoppingListName: 'Shopping List 3' },
    { shoppingListName: 'Shopping List 4' },
    { shoppingListName: 'Shopping List 5' },
    { shoppingListName: 'Shopping List 6' },
    { shoppingListName: 'Shopping List 7' },
    { shoppingListName: 'Shopping List 8' },
    { shoppingListName: 'Shopping List 9' },
    { shoppingListName: 'Shopping List 10' },
    { shoppingListName: 'Shopping List 11' },
    { shoppingListName: 'Shopping List 12' },
    { shoppingListName: 'Shopping List 13' },
    { shoppingListName: 'Shopping List 14' },
    { shoppingListName: 'Shopping List 15' },
    { shoppingListName: 'Shopping List 16' },
  ];
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {shoppingCards.map((shoppingCard) => {
          return (
            <Card className={classes.root}>
              <CardActionArea
                className={classes.cardActionArea}
                onClick={handleOpenShoppingListDialog}
              >
                <CardContent>
                  <Typography>{shoppingCard.shoppingListName}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="secondary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
      <SingleShoppingList
        open={shoppingListDialogOpen}
        onClose={handleCloseShoppinglistDialog}
      />
    </>
  );
};

export default ShoppingListGrid;
