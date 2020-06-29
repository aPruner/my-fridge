import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
import PersonIcon from "@material-ui/icons/Person"
import AddIcon from "@material-ui/icons/Add"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import GoogleButton from "react-google-button"
import { blue } from "@material-ui/core/colors"

const useStyles = makeStyles({
  signInTitle: {
    paddingTop: "16px",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
})

export interface SimpleDialogProps {
  open: boolean
  selectedValue: string
  onClose: (value: string) => void
}

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles()
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle className="signInTitle" id="simple-dialog-title">
        Sign in
      </DialogTitle>
      <List>
        <ListItem>
          <TextField label="Username"></TextField>
        </ListItem>
        <ListItem>
          <TextField label="Password" type="password"></TextField>
        </ListItem>
        <ListItem>
          <Button variant="contained" color="primary">
            LOGIN
          </Button>
        </ListItem>
        <ListItem>
          <GoogleButton />
        </ListItem>
      </List>
    </Dialog>
  )
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value: string) => {
    setOpen(false)
  }

  return (
    <div>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Sign in
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}
