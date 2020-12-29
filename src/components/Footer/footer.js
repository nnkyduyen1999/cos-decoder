import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { customThemes } from "../../styles/theme";
import { Divider, Grid } from "@material-ui/core";
import Logo from "../../images/Logo.svg";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: customThemes.PRIMARY_PINK,
    paddingTop: 30,
    paddingBottom: 20,
  },
  logo: {
    width: "15%",
    height: "15%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: customThemes.PRIMARY_PINK,
  },
  icon: {
    color: customThemes.PRIMARY_GREY,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid container direction="row" justify="center" alignItems="center">
        <img alt="Logo" src={Logo} className={classes.logo} />
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginBottom: 20, width: "60%" }}
      >
        <Grid
          item
          xs={3}
          style={{
            textAlign: "center",
            color: customThemes.PRIMARY_GREY,
            fontWeight: customThemes.FONT_BOLD,
          }}
        >
          Về chúng tôi
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            textAlign: "center",
            color: customThemes.PRIMARY_GREY,
            fontWeight: customThemes.FONT_BOLD,
          }}
        >
          Hỗ trợ
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            textAlign: "center",
            color: customThemes.PRIMARY_GREY,
            fontWeight: customThemes.FONT_BOLD,
          }}
        >
          Quyền riêng tư
        </Grid>
      </Grid>

      <Divider light="true" style={{ width: "80%", marginBottom: 20 }} />
      <Grid container direction="row" style={{ width: "80%" }}>
        <Grid item xs={6}>
          <Grid container>
            <Grid>
              <CopyrightIcon className={classes.icon} fontSize="small" />
            </Grid>
            <Grid style={{ color: customThemes.PRIMARY_GREY, fontSize: 13 }}>
              2021 Nhom 11
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="row" justify="flex-end" spacing={4}>
            <Grid item>
              <InstagramIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <TwitterIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <YouTubeIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <FacebookIcon className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
