import React, { useState } from "react";
import { Box, Grid, TextField, Button, Divider } from "@material-ui/core";
import { useStyles, PinkButton, PinkOutlineButton, PinkStyledTextField} from "./useStyles";
import GGIcon from "@material-ui/icons/MailOutline";
import FBIcon from "@material-ui/icons/Facebook";
import Logo from "../../images/Logo.svg";
import {Redirect} from "react-router-dom";

const Login = () => {
  const classes = useStyles();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {isClicked ? (
        <Redirect to="/"/>
      ) : (
        <Grid
          className={classes.root}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid container justify="center" alignItems="center">
            <img alt="Logo" src={Logo} className={classes.logo} />
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
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
                      <Box className={classes.text}>
                        Chào mừng bạn trở lại !
                      </Box>
                    </Grid>

                    <Grid item xs={8}>
                      <PinkStyledTextField
                        label="Email"
                        type="text"
                        variant="outlined"
                        fullWidth="true"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <PinkStyledTextField
                        label="Mật khẩu"
                        type="password"
                        variant="outlined"
                        fullWidth="true"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <PinkButton onClick={()=>setIsClicked(true)}>Đăng nhập</PinkButton>
                    </Grid>
                    <Grid item xs={12}>
                      <PinkOutlineButton onClick={()=>setIsClicked(true)}>Đăng ký</PinkOutlineButton>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        style={{ width: "100%", textTransform: "capitalize" }}
                        variant="outlined"
                        startIcon={<GGIcon />}
                      >
                        Google
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        style={{ width: "100%", textTransform: "capitalize" }}
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
      )}
    </>
  );
};

export default Login;
