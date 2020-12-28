import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { colors } from "../../global/constants";

const useStyles = makeStyles({
  root: {
    // width: "20%",
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
  },
  usernameText: {
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

const RoutineItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item.image}
          title={props.item.name}
          component="img"
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
            className={classes.usernameText}
            component="p"
          >
            {props.item.username}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions> */}
      {/* </CardActions> */}
    </Card>
  );
};

export default RoutineItem;
