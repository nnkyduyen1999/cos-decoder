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
import { IconButton, Link } from "@material-ui/core";
// import { Redirect } from "react-router-dom";
// import { Link as RouterLink } from
const useStyles = makeStyles({
  root: {
    // width: "20%",
    // minWidth: "250px",
    // minHeight: "270px",
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
    position: "absolute",
    bottom: "3px",
    right: "3px",
  },
});

const ProductItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea style={{ minHeight: "270px" }}>
        <Link href="/product/1" style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          className={classes.media}
          image={props.item.image}
          title={props.item.name}
          href="/product/1"
        />
        <CardContent>
          <Typography
            gutterBottom
            className={classes.title}
            variant="h6"
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

        </Link>
                <CardActions className={classes.addButton}>
          <IconButton onClick={props.onClick}>
            <AddCircleIcon fontSize="large" className={classes.addIcon} />
          </IconButton>
        </CardActions>
      </CardActionArea>
      
      {/* <CardActions> */}
      {/* </CardActions> */}
    </Card>
  );
};

export default ProductItem;
