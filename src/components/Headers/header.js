import { Grid } from "@material-ui/core";
import React from "react";
import { useStyles, PinkButton, CustomHeaderButton } from "./useStyle";
import Logo from "../../images/Logo.svg";

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={3}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={6}>
              <div>
                <img alt="Logo" src={Logo} className={classes.logo} />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={2}>
              <CustomHeaderButton>Trang chủ</CustomHeaderButton>
            </Grid>
            <Grid item xs={2}>
              <CustomHeaderButton>So Sánh</CustomHeaderButton>
            </Grid>
            <Grid item xs={2}>
              <CustomHeaderButton>Phân tích</CustomHeaderButton>
            </Grid>
            <Grid item xs={2}>
              <CustomHeaderButton>Routine</CustomHeaderButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={5}>
              <PinkButton variant="contained" color="primary">
                Đăng nhập
              </PinkButton>
            </Grid>
            <Grid item xs={4}>
              <CustomHeaderButton>Đăng ký</CustomHeaderButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
