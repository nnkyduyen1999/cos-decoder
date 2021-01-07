import { makeStyles } from "@material-ui/core";
import { colors } from "../../global/constants";

export const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  title: {
    // fontFamily: 'Manrope',
    fontWeight: 600,
  },
  search: {
    position: "relative",
    borderRadius: '10px',
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    // marginRight: theme.spacing(2),
    // marginLeft: 0,
    width: "100%",
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
    // border: `1px solid #CED4DA`,

    boxShadow: "20px 20px 50px 10px #FFE2E2",
  },
  searchContainer: {
    backgroundColor: colors.pink1,
    padding: theme.spacing(5, 2),
    marginBottom: theme.spacing(10),
  },
  searchBox: {
    // boxShadow: "0px 10px 20px rgba(41, 41, 42, 0.07)",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    background: 'linear-gradient(to right, rgba(255,0,0,0), #FFE2E2)',
    borderRadius: '10px',
    padding: theme.spacing(1, 0),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create("width"),
    // width: "100%",
    // backgroundColor: 'yellow'
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
  sectionTitle: {
    // color: 'yellow',
    // backgroundColor: 'red',
    textAlign: "center",
  },
  introContainer: {
    backgroundColor: 'white',
    // color: "yellow",
    alignItems: 'center',
  },
}));
