import React from "react"
import { Link } from "gatsby"

// Material UI imports
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core"
import { Menu } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: `none`,
      color: `inherit`,
    },
  })
)

const Header: React.FC<HeaderProps> = ({ siteTitle = "" }: HeaderProps) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Link to="/" className={classes.title}>
            <Typography variant="h6">
              {siteTitle}
            </Typography>
          </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

interface HeaderProps {
  siteTitle: String,
}

export default Header
