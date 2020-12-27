import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import { customThemes } from "../../styles/theme";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: customThemes.PRIMARY_PINK,
  },
  logo: {
    width: 100,
    height: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: customThemes.PRIMARY_PINK,
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
  },
}))(Button);

const CustomHeaderButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(customThemes.PRIMARY_PINK),
    backgroundColor: customThemes.PRIMARY_PINK,
    "&:hover": {
      color: customThemes.BUTTON_HOVER,
      backgroundColor: "none",
    },
    "&:active": {
      color: customThemes.BUTTON_HOVER,
    },
    textTransform: "capitalize",
  },
}))(Button);

export { useStyles, PinkButton, CustomHeaderButton };
