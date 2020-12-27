import React from "react";
import { Box, Grid, TextField, Button, Divider } from "@material-ui/core";
import { useStyles, PinkButton, PinkOutlineButton } from "./useStyles";
import GGIcon from "@material-ui/icons/MailOutline";
import FBIcon from "@material-ui/icons/Facebook";
import Logo from "../../images/Logo.svg";

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid container justify="center" alignItems="center">
          <img alt="Logo" src={Logo} className={classes.logo} />
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              <Box className={classes.form}>
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Box>Chào mừng bạn trở lại !</Box>
                  </Grid>

                  <Grid item xs={8}>
                    <TextField
                      label="Email"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth="true"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      label="Mật khẩu"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth="true"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <PinkButton>Đăng nhập</PinkButton>
                  </Grid>
                  <Grid item xs={12}>
                    <PinkOutlineButton>Đăng ký</PinkOutlineButton>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="outlined" startIcon={<GGIcon />}>
                      Google
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      color="primary"
                      variant="contained"
                      startIcon={<FBIcon />}
                    >
                      Facebook
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
