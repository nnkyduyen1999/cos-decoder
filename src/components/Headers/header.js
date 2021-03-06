import {Avatar, Grid, IconButton, Link, Typography} from "@material-ui/core";
import React, {useContext, useState} from "react";
import {
    useStyles,
    PinkButton,
    CustomHeaderButton,
    ActiveHeaderButton,
} from "./useStyle";
import Logo from "../../images/Logo.svg";
import {AuthenticationContext} from "../../provider/authProvider";
import Button from "@material-ui/core/Button";

export default function Header(props) {
    const [isActived, setIsActived] = useState(false);
    const [isActived1, setIsActived1] = useState(false);
    const [isActived2, setIsActived2] = useState(false);
    const [isActived3, setIsActived3] = useState(false);
    const classes = useStyles();
    const {isAuth, setAuth} = useContext(AuthenticationContext);

    const setActiveForHome = () => {
        setIsActived(true);
        setIsActived1(false);
        setIsActived2(false);
        setIsActived3(false);
    }
    const setActiveForCompare = () => {
        setIsActived(false);
        setIsActived1(true);
        setIsActived2(false);
        setIsActived3(false);
    }
    const setActiveForDetail = () => {
        setIsActived(false);
        setIsActived1(false);
        setIsActived2(true);
        setIsActived3(false);
    }
    const setActiveForRoutine = () => {
        setIsActived(false);
        setIsActived1(false);
        setIsActived2(false);
        setIsActived3(true);
    }

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={3}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={6}>
                            <Link href="/">
                                <img alt="Logo" src={Logo} className={classes.logo}/>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={2}>
                            {!isActived ? (
                                <CustomHeaderButton onClick={setActiveForHome} href="/">
                                    Trang ch???
                                </CustomHeaderButton>
                            ) : (
                                <ActiveHeaderButton onClick={setActiveForHome} href="/">
                                    Trang ch???
                                </ActiveHeaderButton>
                            )}
                        </Grid>

                        <Grid item xs={2}>
                            {!isActived1 ? (
                                <CustomHeaderButton onClick={setActiveForCompare} href="/compare">
                                    So s??nh
                                </CustomHeaderButton>
                            ) : (
                                <ActiveHeaderButton onClick={setActiveForCompare} href="/compare">
                                    So s??nh
                                </ActiveHeaderButton>
                            )}
                        </Grid>
                        <Grid item xs={2}>
                            {!isActived2 ? (
                                <CustomHeaderButton onClick={setActiveForDetail} href="/detail">
                                    Ph??n t??ch
                                </CustomHeaderButton>
                            ) : (
                                <ActiveHeaderButton onClick={setActiveForDetail} href="/detail">
                                    Ph??n t??ch
                                </ActiveHeaderButton>
                            )}
                        </Grid>
                        <Grid item xs={2}>
                            {!isActived3 ? (
                                <CustomHeaderButton onClick={setActiveForRoutine} href="/routine">
                                    Routine
                                </CustomHeaderButton>
                            ) : (
                                <ActiveHeaderButton onClick={setActiveForRoutine} href="/routine">
                                    Routine
                                </ActiveHeaderButton>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    {isAuth ?
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    color="inherit"
                                    className={classes.link}
                                    startIcon={
                                        <Avatar src="https://images-na.ssl-images-amazon.com/images/I/71FcdrSeKlL._AC_SL1001_.jpg" />
                                    }
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                >
                                    Tu  Hao
                                </Button>
                            </Grid>

                        </Grid>
                        :
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={5}>
                                <PinkButton href="/login" variant="contained" color="primary" style={{width: '90%'}}>
                                    ????ng nh???p
                                </PinkButton>
                            </Grid>
                            <Grid item xs={4}>
                                <CustomHeaderButton href="/login" style={{width: '100%'}}>????ng k??</CustomHeaderButton>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </div>
    );
}



