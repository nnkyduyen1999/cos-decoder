import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { colors } from "../../global/constants";
import { Box, Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
    boxShadow: "0px 10px 20px rgba(41, 41, 42, 0.07)",
  },
  media: {
    maxWidth: "100%",
    paddingTop: "56.25%",
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
    bottom: "3px",
    right: "3px",
  },
  divider: {
    backgroundColor: colors.pink4,
    width: '2px',
    marginTop: '25px',
    marginBottom: '25px'
  }
});

const CompareItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box width="50%" m={3} p={1}>
            <CardMedia
              className={classes.media}
              image={props.item.first.image}
              title={props.item.first.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                className={classes.title}
                variant="h6"
                component="h2"
              >
                {props.item.first.name}
              </Typography>
              <Typography
                variant="body2"
                className={classes.brandText}
                component="p"
              >
                {props.item.first.brand}
              </Typography>
            </CardContent>
          </Box>
          <Divider className={classes.divider} orientation="vertical" flexItem />
          <Box width="50%" m={3} p={1}>
            <CardMedia
              className={classes.media}
              image={props.item.second.image}
              title={props.item.second.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                className={classes.title}
                variant="h6"
                component="h2"
              >
                {props.item.second.name}
              </Typography>
              <Typography
                variant="body2"
                className={classes.brandText}
                component="p"
              >
                {props.item.second.brand}
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default CompareItem;
