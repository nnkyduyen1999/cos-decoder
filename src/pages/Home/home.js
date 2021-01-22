import { Box, Typography } from "@material-ui/core";
import React from "react";
import ProductItem from "../../components/ProductItem/product-item";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./useStyles";
import IngredientItem from "../../components/IngredientItem/ingredient-item";
import RoutineItem from "../../components/RoutineItem/routine-item";
import CompareItem from "../../components/CompareItem/compare-item";
import Header from "../../components/Headers/header";
import { SimpleDialog } from "../../components/PopUp/popUp";
import Footer from "../../components/Footer/footer";

const Home = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (item) => {
    // console.log(item);
    // setInfo({
    //   name: item.name,
    //   image: item.image
    // });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const topProducts = [
    {
      id: "1",
      image: "/images/products/Organic Flowers Cleansing Water.jpg",
      name: "Organic Flowers Cleansing Water",
      brand: "Whamisa",
    },
    {
      id: "2",
      image:
        "/images/products/kem-duong-trang-nang-tone-mau-da-innisfree-jeju-cherry-blossom-tone-up-cream-50ml-3.jpg",
      name: "Jeju Cherry Blossom Tone-up Cream",
      brand: "Innisfree",
    },
    {
      id: "3",
      image: "/images/products/tone up no sebum sun screen.jpg",
      name: "Tone up No Sebum Sunscreen",
      brand: "Innisfree",
    },
    {
      id: "4",
      image: "/images/products/Innisfree, Jeju Cherry Blossom Skin.webp",
      name: "Jeju Cherry Blossom Skin",
      brand: "Innisfree",
    },
  ];

  const topIngredients = [
    {
      id: "1",
      image: "/images/ingredients/urea.svg",
      name: "Urea",
      usage: "Phục hồi",
    },
    {
      id: "2",
      image: "/images/ingredients/bha.svg",
      name: "BHA",
      usage: "Tẩy tế bào chết",
    },
    {
      id: "3",
      image: "/images/ingredients/aha.svg",
      name: "Glycolic acid",
      usage: "Tẩy tế bào chết",
    },
    {
      id: "4",
      image: "/images/ingredients/panthenol.svg",
      name: "Panthenol",
      usage: "Phục hồi",
    },
  ];

  const topRoutines = [
    {
      id: "1",
      image: "/images/routines/routine1.svg",
      name: "Routine trị mụn",
      username: "Trần Quỳnh Như",
    },
    {
      id: "2",
      image: "/images/routines/routine2.svg",
      name: "Routine sáng da",
      username: "Nguyễn Ngọc Trân",
    },
    {
      id: "3",
      image: "/images/routines/routine3.svg",
      name: "Routine dưỡng ẩm",
      username: "Mã Tú Trinh",
    },
    {
      id: "4",
      image: "/images/routines/routine4.svg",
      name: "Routine cơ bản",
      username: "Lý Thuý Kiều",
    },
  ];

  const topCompareProducts = [
    {
      id: "1",
      first: {
        image: "/images/products/Cosrx, Low pH Good Morning Gel Cleanser.jpg",
        name: "Low-pH Good Morning Cleanser",
        brand: "CosRX",
      },
      second: {
        image:
          "/images/products/Salicylic_Acid_Daily_Gentle_Cleanser__30758.1502923035.400.400.png",
        name: "Salicylic Acid Exfoliating Cleanser",
        brand: "CosRX",
      },
    },
    {
      id: "2",
      first: {
        image:
          "/images/products/Paulas-Choice-Skin-Perfecting-2-BHA-Liquid-118ml-200024.jpg",
        name: "Skin Perfecting 2% BHA Liquid Exfoliant",
        brand: "Paula's Choice",
      },
      second: {
        image:
          "/images/products/cosrx_bha_blackhead_power_liquid_100ml_c0210fc1a514470692c73c41854093ff_master.webp",
        name: "BHA Blackhead Power Liquid",
        brand: "CosRX",
      },
    },
  ];

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      props.history.push("/search");
    }
  };

  return (
    <div className={classes.root}>
      <Header />

      <Box display='flex' justifyContent='center' mx={8} px={5} mb={7}>
        <Box
          width='50%'
          m={3}
          pb={5}
          pl={5}
          // justifyContent='center'
          // alignSelf="flex-end"
          display='flex'
          flexDirection='column'
          justifyContent='flex-end'
          // className={classes.introContainer}
        >
          <Typography
            // classeName={classes.title}
            variant='h4'
            // component="h2"
            gutterBottom
          >
            Chào mừng bạn đến với CosDecoder
          </Typography>
          <Typography variant='h5' gutterBottom>
            Tham gia cộng đồng của chúng tôi để hiểu rõ về sản phẩm mà bạn đang
            sử dụng.
          </Typography>
          <Typography variant='h5' gutterBottom>
            Cùng xây dựng cộng đồng bằng kiến thức của bạn và tìm hiểu thêm
            nhiều sản phẩm nữa.
          </Typography>
        </Box>
        <Box width='50%' display='flex' alignItems='center' m={3} p={1} pl={5}>
          <img src='/Free Vanity Vector 1.svg' alt='background-image' />
        </Box>
      </Box>

      <Box
        className={classes.searchBox}
        display='flex'
        justifyContent='center'
        mx={8}
        px={5}
        my={7}
      >
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <form
            onSubmit={() => {
              props.history.push("/search");
            }}
          >
            <InputBase
              placeholder='Tìm kiếm…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              required
            />
          </form>
        </div>
      </Box>
      {/* </div> */}

      <Typography className={classes.sectionTitle} variant='h4' gutterBottom>
        Sản phẩm
      </Typography>
      <Box display='flex' justifyContent='center' mx={5} mt={2} mb={5} px={5}>
        <Box width='25%' m={3} p={1}>
          <ProductItem
            item={topProducts[0]}
            onClick={() => handleClickOpen(topProducts[0])}
          />
        </Box>
        <Box width='25%' m={3} p={1}>
          <ProductItem
            item={topProducts[1]}
            onClick={() => handleClickOpen(topProducts[1])}
          />
        </Box>
        <Box width='25%' m={3} p={1}>
          <ProductItem
            item={topProducts[2]}
            onClick={() => handleClickOpen(topProducts[2])}
          />
        </Box>
        <Box width='25%' m={3} p={1}>
          <ProductItem
            item={topProducts[3]}
            onClick={() => handleClickOpen(topProducts[3])}
          />
        </Box>
      </Box>

      <Typography className={classes.sectionTitle} variant='h4' gutterBottom>
        Thành phần trong mỹ phẩm
      </Typography>
      <Box display='flex' justifyContent='center' mx={5} mt={2} mb={5} px={5}>
        <Box width='25%' m={3} p={1}>
          <IngredientItem item={topIngredients[0]} />
        </Box>
        <Box width='25%' m={3} p={1}>
          <IngredientItem item={topIngredients[1]} />
        </Box>
        <Box width='25%' m={3} p={1}>
          <IngredientItem item={topIngredients[2]} />
        </Box>
        <Box width='25%' m={3} p={1}>
          <IngredientItem item={topIngredients[3]} />
        </Box>
      </Box>

      <Typography className={classes.sectionTitle} variant='h4' gutterBottom>
        So sánh sản phẩm
      </Typography>

      <Box display='flex' justifyContent='center' mx={5} mt={2} mb={5} px={5}>
        <Box width='50%' m={3} p={1}>
          <CompareItem item={topCompareProducts[0]} />
        </Box>
        <Box width='50%' m={3} p={1}>
          <CompareItem item={topCompareProducts[1]} />
        </Box>
      </Box>

      <Typography className={classes.sectionTitle} variant='h4' gutterBottom>
        Routines
      </Typography>

      <Box display='flex' justifyContent='center' mx={5} mt={2} mb={5} px={5}>
        <Box width='25%' m={3} p={1}>
          <RoutineItem item={topRoutines[0]} />
        </Box>
        <Box width='25%' m={3} p={1}>
          <RoutineItem item={topRoutines[1]} />
        </Box>
        <Box width='25%' m={3} p={1}>
          <RoutineItem item={topRoutines[2]} />
        </Box>
        <Box width='25%' m={3} p={1}>
          <RoutineItem item={topRoutines[3]} />
        </Box>
      </Box>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button> */}
      <SimpleDialog open={open} onClose={handleClose} />
      <Footer />
    </div>
  );
};

export default Home;
