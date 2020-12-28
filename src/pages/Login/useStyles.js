import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import { customThemes } from "../../styles/theme";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "100vh",
    backgroundColor: customThemes.PRIMARY_PINK,
  },
  logo: {
    width: 300,
    height: 100,
  },
  form: {
    backgroundColor: "#ffffff",
    width: "inherit",
    height: "inherit",
    padding: theme.spacing(4,0),
    borderRadius: 20,
    textAlign: "center",
  },
  input: {
    margin: theme.spacing(2,2)
  }
}));

const PinkButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(customThemes.SECONDARY_PINK),
    backgroundColor: customThemes.SECONDARY_PINK,
    "&:hover": {
      backgroundColor: "#E28F8F",
    },
    textTransform: "capitalize",
    width: "50%"
  },
}))(Button);

const PinkOutlineButton = withStyles((theme) => ({
    root: {
      color: customThemes.BUTTON_HOVER,
      "&:hover": {
        backgroundColor: fade(customThemes.PRIMARY_PINK, 0.7),
      },
      textTransform: "capitalize",
      width: "50%",
      border: "1px solid",
      borderColor: customThemes.BUTTON_HOVER,
    },
  }))(Button);

export { useStyles, PinkButton, PinkOutlineButton };
