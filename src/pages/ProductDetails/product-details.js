import React, {Fragment} from 'react';
import {Container} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CommentSection from "../../components/CommentSection/comment-section";
import ProductDescription from "../../components/ProductDescription/product-description";

const ProductDetails = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline/>
            <Container className={classes.root}>
                <Grid container spacing={10}>
                    <Grid item md={4}>
                        <CardMedia
                            component="img"
                            alt="product-image"
                            height="300"
                            image="https://cf.shopee.co.th/file/4a160d13471d5b5af7ccc00beaf63f78"
                            title="product-image"
                        />
                    </Grid>
                    <Grid item md={8}>
                        <ProductDescription/>
                    </Grid>
                </Grid>
                <CommentSection/>
            </Container>
        </Fragment>
    );
};

const useStyles = makeStyles({
    root: {
        width: "100%",
        margin: "auto",
        marginTop: 40,
        backgroundColor: "#FFFFFF"
    },
});

export default ProductDetails;
