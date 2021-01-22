import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import { customThemes } from "../../styles/theme";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: customThemes.PRIMARY_PINK,
  },
  logo: {
    width: '90%',
    height: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: customThemes.PRIMARY_PINK,
  },
  link: {
    margin: theme.spacing(1, 2, 1, 2),
    fontWeight: "bold",
  },
}));

const PinkButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(customThemes.SECONDARY_PINK),
    backgroundColor: customThemes.SECONDARY_PINK,
    "&:hover": {
      backgroundColor: "#E28F8F",
    },
    textTransform: "capitalize",
    fontWeight: customThemes.FONT_BOLD
  },
}))(Button);

const CustomHeaderButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(customThemes.PRIMARY_PINK),
    backgroundColor: customThemes.PRIMARY_PINK,
    "&:hover": {
      color: customThemes.BUTTON_HOVER,
      backgroundColor: customThemes.PRIMARY_PINK,
    },
    "&:active": {
      color: customThemes.BUTTON_HOVER,
      backgroundColor: customThemes.PRIMARY_PINK,
    },
    textTransform: "capitalize",
    fontWeight: customThemes.FONT_BOLD
  },
}))(Button);

const ActiveHeaderButton = withStyles((theme) => ({
    root: {
      color: customThemes.BUTTON_HOVER,
      backgroundColor: customThemes.PRIMARY_PINK,
      "&:hover": {
        color: customThemes.BUTTON_HOVER,
        backgroundColor: "none",
      },
      "&:active": {
        color: customThemes.BUTTON_HOVER,
      },
      textTransform: "capitalize",
      fontWeight: customThemes.FONT_BOLD
    },
  }))(Button);

export { useStyles, PinkButton, CustomHeaderButton, ActiveHeaderButton };
