import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import {
  useStyles,
  PinkButton,
  CustomHeaderButton,
  ActiveHeaderButton,
} from "./useStyle";
import Logo from "../../images/Logo.svg";

export default function Header(props) {
  const [isActived, setIsActived] = useState(false);
  const [isActived1, setIsActived1] = useState(false);
  const [isActived2, setIsActived2] = useState(false);
  const [isActived3, setIsActived3] = useState(false);
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
              {!isActived ? (
                <CustomHeaderButton onClick={() => setIsActived(true)}>
                  Trang chủ
                </CustomHeaderButton>
              ) : (
                <ActiveHeaderButton onClick={() => setIsActived(false)}>
                  Trang chủ
                </ActiveHeaderButton>
              )}
            </Grid>

            <Grid item xs={2}>
            {!isActived1 ? (
                <CustomHeaderButton onClick={() => setIsActived1(true)}>
                  So sánh
                </CustomHeaderButton>
              ) : (
                <ActiveHeaderButton onClick={() => setIsActived1(false)}>
                  So sánh
                </ActiveHeaderButton>
              )}
            </Grid>
            <Grid item xs={2}>
            {!isActived2 ? (
                <CustomHeaderButton onClick={() => setIsActived2(true)}>
                  Phân tích
                </CustomHeaderButton>
              ) : (
                <ActiveHeaderButton onClick={() => setIsActived2(false)}>
                  Phân tích
                </ActiveHeaderButton>
              )}
            </Grid>
            <Grid item xs={2}>
            {!isActived3 ? (
                <CustomHeaderButton onClick={() => setIsActived3(true)}>
                  Routine
                </CustomHeaderButton>
              ) : (
                <ActiveHeaderButton onClick={() => setIsActived3(false)}>
                  Routine
                </ActiveHeaderButton>
              )}
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
