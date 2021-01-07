import React, { useEffect } from "react";
import { useState } from "react";
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
import {
  Box,
  Checkbox,
  Collapse,
  FormControlLabel,
  Grid,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  popup: {
    height: "400px",
    width: "100%",
    overflow: "Auto",
  },
  smallImage: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
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
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: colors.pink3,
      outline: "none",
    },
    "::-webkit-scrollbar-thumb:hover": {
      backgroundColor: colors.pink4,
    },
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
  const [changeExpand, setChangeExpand] = useState([
    { status: false, id: "0" },
  ]);
  const topProducts = [
    {
      id: "1",
      image: "/images/products/Organic Flowers Cleansing Water.jpg",
      name: "Organic Flowers Cleansing Water",
      brand: "Whamisa",
    },
    {
      id: "2",
      image:
        "/images/products/kem-duong-trang-nang-tone-mau-da-innisfree-jeju-cherry-blossom-tone-up-cream-50ml-3.jpg",
      name: "Jeju Cherry Blossom Tone-up Cream",
      brand: "Innisfree",
    },
    {
      id: "3",
      image: "/images/products/tone up no sebum sun screen.jpg",
      name: "Tone up No Sebum Sunscreen",
      brand: "Innisfree",
    },
    {
      id: "4",
      image: "/images/products/Innisfree, Jeju Cherry Blossom Skin.webp",
      name: "Jeju Cherry Blossom Skin",
      brand: "Innisfree",
    },
  ];
  const [emails, setEmails] = useState([
    {
      id: 0,
      name: "Routine mùa hè",
      items: ["Sản phẩm 1", "Sản phẩm 2", "Sản phẩm 3"],
      isOpen: false,
    },
    {
      id: 1,
      name: "Routine mùa đông",
      items: ["Sản phẩm 1", "Sản phẩm 2", "Sản phẩm 3"],
      isOpen: true,
    },
  ]);

  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (id) => {
    setChangeExpand({ status: !changeExpand.status, id: id });
  };

  useEffect(() => {
    if (changeExpand.status == true) {
      let newEmails = emails;
      newEmails[changeExpand.id].isOpen = !newEmails[changeExpand.id].isOpen;
      setEmails(newEmails);
      setChangeExpand({ status: !changeExpand.status, id: changeExpand.id });
    }
  }, [changeExpand]);

  return (
    <Dialog
      fullWidth="true"
      maxWidth="sm"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      scroll="paper"
    >
      <DialogTitle id="simple-dialog-title" onClose={handleClose}>
        Thêm vào Routine
      </DialogTitle>
      <DialogContent dividers>
        <List className={classes.popup}>
          {emails.map((email) => (
            <div>
              <ListItem button key={email.name}>
                <ListItemAvatar>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<CheckCircleOutlineIcon />}
                        checkedIcon={
                          <CheckCircleOutlineIcon
                            style={{ color: colors.pink4 }}
                          />
                        }
                        name="checkedH"
                      />
                    }
                    label={
                      <Grid
                        container
                        direction="column"
                        style={{ marginLeft: "10px" }}
                      >
                        <Grid item>
                          <ListItemText primary={email.name} />
                        </Grid>
                        <Grid item>
                          <Box fontStyle="italic" fontSize="small">
                            Description for {email.name}
                          </Box>
                        </Grid>
                      </Grid>
                    }
                  />
                </ListItemAvatar>
                <div
                  style={{ width: "100%" }}
                  onClick={() => {
                    handleListItemClick(email.id);
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      marginLeft: "auto",
                    }}
                  >
                    {email.isOpen ? <ExpandMore /> : <ExpandLess />}
                  </div>
                </div>
              </ListItem>
              <Collapse in={email.isOpen} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  style={{ marginLeft: "58px" }}
                  disablePadding
                >
                  {topProducts.map((product) => (
                    <ListItem>
                      <ListItemAvatar>
                        <img
                          className={classes.smallImage}
                          src={product.image}
                        ></img>
                      </ListItemAvatar>
                      <Grid
                        container
                        direction="column"
                        style={{ marginLeft: "10px" }}
                      >
                        <Grid item>
                          <ListItemText primary={product.name} />
                        </Grid>
                        <Grid item>
                          <Box color={colors.pink4} fontSize="small">
                            {product.brand}
                          </Box>
                        </Grid>
                      </Grid>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
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
};

function SimpleDialogDemo() {
  /*const [open, setOpen] = React.useState(false);
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
  );*/
  return <h1>Cai nay la SimpleDialogDemo Ne</h1>;
}

export { SimpleDialog, SimpleDialogDemo };
