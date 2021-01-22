import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { colors } from "../../global/constants";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton, Link } from "@material-ui/core";
import { SimpleDialog } from "../../components/PopUp/popUp";
import { Context } from "../../provider/provider";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
    boxShadow: "0px 10px 20px rgba(41, 41, 42, 0.07)",
  },
  media: {
    maxWidth: "100%",
    // paddingTop: "56.25%",
    // backgroundColor: colors.gray1,
    maxHeight: "150px",
    objectFit: "contain",
    margin: "auto",
    backgroundColor: "white",
  },
  title: {
    color: colors.pink4,
    textAlign: "center",
    fontSize: "medium",
  },
  brandText: {
    color: colors.gray4,
    textAlign: "center",
  },
  addIcon: {
    color: colors.green1,
  },
  addButton: {
    justifyContent: "flex-end",
    height: "42px",
  },
});

const ProductItem = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { setInfo } = useContext(Context);
  const history = useHistory();

  const handleClickOpen = () => {
    debugger;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickItem = (item) => {
    // console.log("before", info);
    setInfo(item);
    history.push("/product/1");
    // console.log(item);
    // console.log("info", info);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea
        style={{ minHeight: "270px" }}
        onClick={() => handleClickItem(props.item)}
      >
        <CardMedia
          component='img'
          className={classes.media}
          image={props.item.image}
          title={props.item.name}

          //href="/product/1"
        />
        <CardContent>
          <Typography
            gutterBottom
            className={classes.title}
            variant='h6'
            component='h2'
          >
            {props.item.name}
          </Typography>
          <Typography
            variant='body2'
            className={classes.brandText}
            component='p'
          >
            {props.item.brand}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.addButton}>
        <IconButton onClick={handleClickOpen}>
          <AddCircleIcon fontSize='large' className={classes.addIcon} />
        </IconButton>
      </CardActions>
      <SimpleDialog open={open} onClose={handleClose} />
    </Card>
  );
};

export default ProductItem;
