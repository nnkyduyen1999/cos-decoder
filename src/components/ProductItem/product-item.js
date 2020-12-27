import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { colors } from "../../global/constants";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "20%",
    borderRadius: 5,
    boxShadow: "0px 10px 20px rgba(41, 41, 42, 0.07)",
  },
  media: {
    maxWidth: "100%",
    paddingTop: "56.25%",
    backgroundColor: "green",
  },
  title: {
    color: colors.pink4,
    textAlign: "center",
  },
  brandText: {
    color: colors.gray4,
    textAlign: "center",
  },
  addIcon: {
    color: colors.green1,
  },
  addButton: {
    position: "absolute",
    bottom: "5px",
    right: "5px",
  },
});

const ProductItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item.image}
          title="innisfree jeju volcanic pore cleasing foam"
        />
        <CardContent>
          <Typography
            gutterBottom
            className={classes.title}
            variant="h5"
            component="h2"
          >
            {props.item.name}
          </Typography>
          <Typography
            variant="body2"
            className={classes.brandText}
            component="p"
          >
            {props.item.brand}
          </Typography>
        </CardContent>
        <IconButton className={classes.addButton}>
          <AddCircleIcon fontSize="large" className={classes.addIcon} />
        </IconButton>
      </CardActionArea>
      {/* <CardActions> */}
      {/* </CardActions> */}
    </Card>
  );
};

export default ProductItem;
