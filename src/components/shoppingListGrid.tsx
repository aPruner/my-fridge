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
  const classes = useStyles();
  const shoppingCards = [
    { shoppingListName: 'Shopping List 1' },
    { shoppingListName: 'Shopping List 2' },
    { shoppingListName: 'Shopping List 3' },
    { shoppingListName: 'Shopping List 4' },
    { shoppingListName: 'Shopping List 5' },
    { shoppingListName: 'Shopping List 6' },
  ];
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      {shoppingCards.map((shoppingCard) => {
        return (
          <Card className={classes.root}>
            <CardActionArea className={classes.cardActionArea}>
              <CardContent>
                <Typography>{shoppingCard.shoppingListName}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
};

export default ShoppingListGrid;
