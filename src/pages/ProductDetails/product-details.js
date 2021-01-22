import React, {useContext} from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CommentSection from "../../components/CommentSection/comment-section";
import ProductDescription from "../../components/ProductDescription/product-description";
import Typography from "@material-ui/core/Typography";
import ResourceItem from "../../components/ResourceItem/resource-item";
import Link from "@material-ui/core/Link";
import { colors, relatedProduct } from "../../global/constants";
import Header from "../../components/Headers/header";
import Footer from "../../components/Footer/footer";
import EffectTable from "../../components/EffectTable/effect-table";
import IngredientTable from "../../components/IngredientTable/ingredient-table";
import ProductOverviewItem from "../../components/ProductOverviewItem/product-overview-item";
import ProductItem from "../../components/ProductItem/product-item";
import {Context} from "../../provider/provider";

const ProductDetails = (props) => {
  const classes = useStyles();
  const {info} = useContext(Context);
  console.log(info);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Container
        style={{
          width: "80%",
          margin: "auto",
          marginTop: 40,
          paddingBottom: 20,
        }}
      >
        <Grid container spacing={10}>
          <Grid item md={4}>
            <CardMedia
              component="img"
              alt="product-image"
              height="300"
              image={info.image}
              title="product-image"
            />
          </Grid>
          <Grid item md={8}>
            <ProductDescription/>
          </Grid>
        </Grid>

        <Typography className={classes.title} style={{ marginBottom: 10 }}>
          Tổng quan sản phẩm
        </Typography>
        {/*<Grid item md={10}>*/}
        <Grid container>
          <Grid item md={3}>
            <ProductOverviewItem title="Không paraben" />
          </Grid>
          <Grid item md={3}>
            <ProductOverviewItem title="Không  thử nghiệm trên động vật" />
          </Grid>
          <Grid item md={3}>
            <ProductOverviewItem title="Không silicone" />
          </Grid>
          <Grid item md={3}>
            <ProductOverviewItem title="Không cồn khô" />
          </Grid>
          <Grid item md={3}>
            <ProductOverviewItem title="Không hương liệu" />
          </Grid>
          <Grid item md={3}>
            <ProductOverviewItem title="Không Sulfates" />
          </Grid>
        </Grid>
        <Typography className={classes.title} style={{ marginBottom: 10 }}>
          Công dụng & thành phần đáng chú ý
        </Typography>
        <EffectTable />

        <Typography className={classes.title} style={{ marginBottom: 10 }}>
          Chi tiết bảng thành phần
        </Typography>
        <IngredientTable />

        <Typography className={classes.title} style={{ marginBottom: 10 }}>
          Nguồn thông tin
        </Typography>
        <div>
          <ResourceItem content="https://www.innisfree.vn/product/detail?prdno=37&optno=38&schdplctgno=12" />
        </div>
        <div>
          <ResourceItem content="https://ec.europa.eu/growth/sectors/cosmetics/cosing_en" />
        </div>
        <Link
          href="#"
          color="inherit"
          style={{ textDecorationColor: colors.pink4 }}
        >
          <Typography className={classes.link}>
            !? Thông tin trên chưa chính xác ? Bạn có muốn đóng góp thêm ?
          </Typography>
        </Link>

        <Typography className={classes.title}>Bình luận</Typography>
        <CommentSection />

        <Typography className={classes.title} style={{ marginBottom: 10 }}>
          Sản phẩm liên quan
        </Typography>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <ProductItem item={relatedProduct[0]} />
          </Grid>
          <Grid item md={3}>
            <ProductItem item={relatedProduct[1]} />
          </Grid>
          <Grid item md={3}>
            <ProductItem item={relatedProduct[2]} />
          </Grid>
          <Grid item md={3}>
            <ProductItem item={relatedProduct[3]} />
          </Grid>
        </Grid>

        <Typography className={classes.title} style={{ marginBottom: 10 }}>
          Sản phẩm cùng thương hiệu
        </Typography>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <ProductItem item={relatedProduct[4]} />
          </Grid>
          <Grid item md={3}>
            <ProductItem item={relatedProduct[5]} />
          </Grid>
          <Grid item md={3}>
            <ProductItem item={relatedProduct[6]} />
          </Grid>
          <Grid item md={3}>
            <ProductItem item={relatedProduct[7]} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFFFFF",
    flex: 1,
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
  },
});

export default ProductDetails;
