import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { customThemes } from "../../styles/theme";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { colors } from "../../global/constants";
import { Box, Grid } from "@material-ui/core";

const emails = ["Routine mùa hè", "Routine mùa đông"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: customThemes.BUTTON_HOVER,
  },
});

const PinkOutlineButton = withStyles((theme) => ({
  root: {
    color: customThemes.BUTTON_HOVER,
    "&:hover": {
      backgroundColor: fade(customThemes.PRIMARY_PINK, 0.7),
    },
    textTransform: "capitalize",
    width: "20%",
    border: "1px solid",
    borderColor: customThemes.BUTTON_HOVER,
  },
}))(Button);

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.title}>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      fullWidth="true"
      maxWidth="xs"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      scroll="paper"
    >
      <DialogTitle id="simple-dialog-title" onClose={handleClose}>
        Thêm vào Routine
      </DialogTitle>
      <DialogContent dividers>
        <List>
          {emails.map((email) => (
            <ListItem
              button
              onClick={() => handleListItemClick(email)}
              key={email}
            >
              <ListItemAvatar>
                <CheckCircleOutlineIcon
                  style={{ color: colors.pink4, marginRight: 10 }}
                />
              </ListItemAvatar>
              <Grid container direction="column">
                <Grid item>
                  <ListItemText primary={email} />
                </Grid>
                <Grid item>
                  <Box fontStyle="italic" fontSize="small">Description</Box>
                </Grid>
              </Grid>
            </ListItem>
          ))}

          <ListItem
            autoFocus
            button
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Tạo routine mới" />
          </ListItem>
        </List>
      </DialogContent>

      <DialogActions>
        <PinkOutlineButton onClick={handleClose}>Xác nhận</PinkOutlineButton>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

export { SimpleDialog, SimpleDialogDemo };
