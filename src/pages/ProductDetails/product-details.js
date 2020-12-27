import React, {Fragment} from 'react';
import {Container} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CommentSection from "../../components/CommentSection/comment-section";
import ProductDescription from "../../components/ProductDescription/product-description";
import Typography from "@material-ui/core/Typography";
import ResourceItem from "../../components/ResourceItem/resource-item";
import Link from "@material-ui/core/Link";
import {colors} from "../../global/constants";
import Header from "../../components/Headers/headerWithSearchBar";
import Footer from "../../components/Footer/footer";

const ProductDetails = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <Container style={{width: "90%", margin: 'auto', marginTop: 40}}>
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
                <Typography className={classes.title} style={{marginBottom: 10}}>Nguồn thông tin</Typography>
                    <ResourceItem content="https://www.innisfree.vn/product/detail?prdno=37&optno=38&schdplctgno=12"/>
                <ResourceItem content='Grether-Beck, Susanne, et al. "Urea uptake enhances barrier function and antimicrobial defense in humans by regulating epidermal gene expression." Journal of Investigative Dermatology 132.6 (2012): 1561-1572.'/>
                <Link href="#" color="inherit" style={{ textDecorationColor: colors.pink4 }}>
                    <Typography className={classes.link}>
                        !? Thông tin trên chưa chính xác ? Bạn có muốn đóng góp thêm ?
                    </Typography>
                </Link>
                <Typography className={classes.title}>Bình luận</Typography>
                <CommentSection/>
            </Container>
            <Footer/>
        </div>
    );
};

const useStyles = makeStyles({
    root: {
        backgroundColor: "#FFFFFF",
        flex: 1
    },
    title: {
        fontSize: 25,
        color: "#9F5A5A",
        marginTop: 30,
        // marginBottom: 5
    },
    link: {
        color: colors.pink4,
        marginTop: 10,

    }
});

export default ProductDetails;
