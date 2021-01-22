import React, { useContext, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Divider,
  Checkbox,
  ListItemText,
  FormControlLabel,
} from "@material-ui/core";
import {
  useStyles,
  PinkButton,
  PinkOutlineButton,
  PinkStyledTextField,
} from "./useStyles";
import GGIcon from "@material-ui/icons/MailOutline";
import FBIcon from "@material-ui/icons/Facebook";
import Logo from "../../images/Logo.svg";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { colors } from "../../global/constants";
import Link from "@material-ui/core/Link";
import { AuthenticationContext } from "../../provider/authProvider";

const Login = () => {
  const classes = useStyles();
  const { setIsAuth } = useContext(AuthenticationContext);
  const history = useHistory();
  const handleLogin = () => {
    setIsAuth(true);
    history.push("/");
  };

  return (
    <>
      <Grid
        className={classes.root}
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid container justify='center' alignItems='center'>
          <img alt='Logo' src={Logo} className={classes.logo} />
        </Grid>
        <Grid item xs={6}>
          <Grid container direction='row' justify='center' alignItems='center'>
            <Grid item xs={12}>
              <form className={classes.form} onSubmit={handleLogin}>
                <Grid
                  container
                  spacing={2}
                  direction='row'
                  justify='center'
                  alignItems='center'
                >
                  <Grid item xs={12}>
                    <Box className={classes.text} style={{ marginBottom: 20 }}>
                      Chào mừng bạn trở lại !
                    </Box>
                  </Grid>

                  <Grid item xs={9}>
                    <PinkStyledTextField
                      required
                      label='Email'
                      type='email'
                      variant='outlined'
                      fullWidth='true'
                      InputProps={{
                        className: classes.textField,
                      }}
                      InputLabelProps={{
                        style: {
                          top: -10,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <PinkStyledTextField
                      required
                      label='Mật khẩu'
                      type='password'
                      variant='outlined'
                      fullWidth='true'
                      InputProps={{
                        className: classes.textField,
                      }}
                      InputLabelProps={{
                        style: {
                          top: -10,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Grid
                      container
                      style={{ alignItems: "center", justify: "center" }}
                    >
                      <Grid item xs={6} style={{ textAlign: "left" }}>
                        <FormControlLabel
                          style={{ padding: 0, margin: 0 }}
                          control={<Checkbox style={{ paddingLeft: 0 }} />}
                          label={
                            <Typography color='textSecondary'>
                              Ghi nhớ đăng nhập
                            </Typography>
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Link
                          href='#'
                          color='inherit'
                          style={{ textDecorationColor: colors.pink4 }}
                        >
                          <Typography
                            style={{ color: colors.pink4, textAlign: "right" }}
                          >
                            Quên mật khẩu?
                          </Typography>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <PinkButton type='submit'>Đăng nhập</PinkButton>
                  </Grid>
                  <Grid item xs={12}>
                    <PinkOutlineButton onClick={handleLogin}>
                      Đăng ký
                    </PinkOutlineButton>
                  </Grid>
                  <Grid
                    container
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                  >
                    <Divider
                      light='true'
                      style={{ width: "40%", marginBottom: 15, marginTop: 15 }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      style={{ width: "100%", textTransform: "capitalize" }}
                      variant='outlined'
                      startIcon={<GGIcon />}
                    >
                      Google
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      style={{ width: "100%", textTransform: "capitalize" }}
                      color='primary'
                      variant='contained'
                      startIcon={<FBIcon />}
                    >
                      Facebook
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
