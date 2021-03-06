import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Select,
} from "@material-ui/core";
import {
  CloseOutlined,
  ExpandLess,
  ExpandMore,
  SearchOutlined,
} from "@material-ui/icons/";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../global/constants";
import { colors } from "../../global/constants";
import Header from "../../components/Headers/header";
import Footer from "../../components/Footer/footer";
import ProductItem from "../../components/ProductItem/product-item";
import { usePagination } from "@material-ui/lab/Pagination";
import { PinkStyledTextField } from "../Login/useStyles";
import Brightening from "../../images/diamond.png";
import AcneFighting from "../../images/cookie.png";
import AntiAging from "../../images/hourglass.png";
import Healing from "../../images/band-aid(1).png";
import UV from "../../images/shield 1.svg";

export default function Search(props) {
  const [typeOpen, setTypeOpen] = useState(true);
  const [filterOpen, setFilterOpen] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [filter, setFilter] = useState("Phổ biến");
  const history = useHistory();

  const { items } = usePagination({
    count: 3,
  });

  const UseStyles = makeStyles({
    applyButton: {
      backgroundColor: colors.pink3,
      color: "white",
      marginLeft: "19px",
      marginBottom: "10px",
      width: "80%",
    },
    filterApplied: {
      marginRight: "7px",
      display: "inline-flex",
      border: "solid",
      borderRadius: "17px",
      padding: "4px",
      borderColor: colors.pink4,
      borderWidth: 2,
    },
    boxStyle: {
      borderRadius: 5,
      boxShadow: "0px 10px 20px rgba(41, 41, 42, 0.07)",
      width: "100%",
    },
    optionTitle: {
      color: colors.gray5,
      fontWeight: "bold",
      marginRight: "auto",
    },
    ul: {
      listStyle: "none",
      padding: 0,
      marginTop: 12,
      marginRight: 35,
      display: "flex",
      justifyContent: "flex-end",
    },
    pagingButton: {
      border: "solid",
      borderWidth: "1px",
      padding: 10,
      borderColor: colors.gray2,
      backgroundColor: "white",
      color: colors.pink4,
    },
    property: {
      marginLeft: "5px",
    },
  });

  const classes = UseStyles();

  const handleChangeFilter = (event) => {
    const name = event.target.filter;
    setFilter(name);
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <Container fixed style={{ width: "90%" }}>
        <Grid container direrection='row' spacing={8}>
          <Grid item xs={3}>
            <Box className={classes.boxStyle}>
              <List>
                <ListItem
                  button
                  onClick={() => {
                    setTypeOpen(!typeOpen);
                  }}
                >
                  <span className={classes.optionTitle}>PHÂN LOẠI</span>
                  {typeOpen ? <ExpandMore /> : <ExpandLess />}
                </ListItem>
                <Collapse in={typeOpen} timeout='auto' unmountOnExit>
                  <List
                    component='div'
                    style={{ marginLeft: "30px" }}
                    disablePadding
                  >
                    <ListItemText secondary='Chăm sóc da mặt'></ListItemText>
                    <ListItemText secondary='Cạo râu nam'></ListItemText>
                    <ListItemText secondary='Chăm sóc cơ thể'></ListItemText>
                    <ListItemText secondary='Chăm sóc tóc'></ListItemText>
                    <ListItemText secondary='Make up'></ListItemText>
                    <ListItemText secondary='Nước hoa'></ListItemText>
                    <ListItemText secondary='Chăm sóc móng'></ListItemText>
                  </List>
                </Collapse>
              </List>
            </Box>
            <h3 style={{ color: colors.gray5 }}>LỌC:</h3>
            <Box className={classes.boxStyle}>
              <List>
                <ListItem
                  button
                  onClick={() => {
                    setFilterOpen(!filterOpen);
                  }}
                >
                  <span className={classes.optionTitle}>THÀNH PHẦN</span>
                  {filterOpen ? <ExpandMore /> : <ExpandLess />}
                </ListItem>
                <Collapse in={filterOpen} timeout='auto' unmountOnExit>
                  <List
                    component='div'
                    style={{ marginLeft: "20px" }}
                    disablePadding
                  >
                    <Box>
                      <i style={{ fontSize: "14px", color: colors.gray4 }}>
                        Hiệu quả đáng chú ý trên thành phần:
                      </i>
                    </Box>
                    <ListItem role={undefined}>
                      <ListItemIcon>
                        <Checkbox edge='start' />
                        <img
                          src={UV}
                          alt='uv'
                          style={{
                            width: 25,
                            height: 25,
                            paddingTop: 9,
                            paddingBottom: 9,
                            paddingRight: 9,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText secondary='Chống tia UV' />
                    </ListItem>
                    <ListItem role={undefined}>
                      <ListItemIcon>
                        <Checkbox edge='start' />
                        <img
                          src={AcneFighting}
                          alt='acnefighting'
                          style={{
                            width: 25,
                            height: 25,
                            paddingTop: 9,
                            paddingBottom: 9,
                            paddingRight: 9,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText secondary='Trị mụn' />
                    </ListItem>
                    <ListItem role={undefined}>
                      <ListItemIcon>
                        <Checkbox edge='start' />
                        <img
                          src={Healing}
                          alt='healing'
                          style={{
                            width: 25,
                            height: 25,
                            paddingTop: 9,
                            paddingBottom: 9,
                            paddingRight: 9,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText secondary='Hỗ trợ làm lành vết thương' />
                    </ListItem>
                    <ListItem role={undefined}>
                      <ListItemIcon>
                        <Checkbox edge='start' />
                        <img
                          src={AntiAging}
                          alt='antiaging'
                          style={{
                            width: 25,
                            height: 25,
                            paddingTop: 9,
                            paddingBottom: 9,
                            paddingRight: 9,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText secondary='Chống lão hóa' />
                    </ListItem>
                    <ListItem role={undefined}>
                      <ListItemIcon>
                        <Checkbox edge='start' />
                        <img
                          src={Brightening}
                          alt='britening'
                          style={{
                            width: 25,
                            height: 25,
                            paddingTop: 9,
                            paddingBottom: 9,
                            paddingRight: 9,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText secondary='Làm sáng' />
                    </ListItem>
                    <Box>
                      <i
                        style={{
                          fontSize: "14px",
                          color: colors.gray4,
                          marginBottom: "0px",
                        }}
                      >
                        Thành phần phổ biến:
                      </i>
                    </Box>

                    <br />
                    <FormControlLabel
                      className={classes.property}
                      control={<Checkbox />}
                      label={<ListItemText secondary='AHA' />}
                    />
                    <br />
                    <FormControlLabel
                      className={classes.property}
                      control={<Checkbox />}
                      label={<ListItemText secondary='BHA' />}
                    />
                    <br />
                    <FormControlLabel
                      className={classes.property}
                      control={<Checkbox />}
                      label={<ListItemText secondary='PHA' />}
                    />
                    <br />
                    <FormControlLabel
                      className={classes.property}
                      control={<Checkbox />}
                      label={<ListItemText secondary='Azelic Acid' />}
                    />
                    <br />
                    <FormControlLabel
                      className={classes.property}
                      control={<Checkbox />}
                      label={<ListItemText secondary='Ceramide' />}
                    />
                    <br />
                    <FormControlLabel
                      className={classes.property}
                      control={<Checkbox />}
                      label={<ListItemText secondary='Vitamin A' />}
                    />
                    <br />
                    <Button className={classes.applyButton}>ÁP DỤNG</Button>
                  </List>
                </Collapse>
              </List>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <form
              onSubmit={() => {
                debugger;
                history.push("/search");
              }}
            >
              <PinkStyledTextField
                required
                fullWidth
                id='outlined-basic'
                label='Search'
                type='text'
                variant='outlined'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            </form>
            <h1 style={{ color: colors.pink4 }}>
              Kết quả tìm kiếm với "Dưỡng ẩm"
            </h1>
            <b style={{ fontSize: "20px" }}>Áp dụng cho: </b>
            <div
              style={{ display: "inline-flex", justifyContent: "space-around" }}
            >
              <div className={classes.filterApplied}>
                <span style={{ fontSize: "17px", marginLeft: "5px" }}>
                  whamisa
                </span>
                <CloseOutlined />
              </div>
              <div className={classes.filterApplied}>
                <span style={{ fontSize: "17px", marginLeft: "5px" }}>
                  Dùng cho mặt
                </span>
                <CloseOutlined />
              </div>
              <div className={classes.filterApplied}>
                <span style={{ fontSize: "17px", marginLeft: "5px" }}>
                  Da khô
                </span>
                <CloseOutlined />
              </div>
            </div>
            <br />
            <FormControl
              variant='outlined'
              size='small'
              style={{ minWidth: "250px", marginTop: "17px" }}
            >
              <Select
                native
                value={filter}
                onChange={handleChangeFilter}
                inputProps={{
                  name: "filter",
                }}
              >
                <option value={0}>Phổ biến</option>
                <option value={1}>Cũ nhất</option>
                <option value={2}>Mới nhất</option>
              </Select>
            </FormControl>
            <br /> <br />
            <Grid container spacing={3}>
              <Grid item xs>
                <ProductItem
                  item={{
                    image:
                      "/images/products/Organic Flowers Cleansing Water.jpg",
                    name: "Organic Flowers Cleansing Water",
                    brand: "Whamisa",
                  }}
                />
              </Grid>
              <Grid item xs>
                <ProductItem
                  item={{
                    image: "/images/searchResult2.png",
                    name: "Jeju Cherry Blossom Tone-up Cream",
                    brand: "Innisfree",
                  }}
                />
              </Grid>
              <Grid item xs>
                <ProductItem
                  item={{
                    image: "/images/searchResult3.png",
                    name: "Jeju Cherry Blossom Skin",
                    brand: "Innisfree",
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <ProductItem
                  item={{
                    image: "/images/searchResult4.png",
                    name: "Oat So Simple Water Cream",
                    brand: "Krave Beauty",
                  }}
                />
              </Grid>
              <Grid item xs>
                <ProductItem
                  item={{
                    image: "/images/searchResult5.png",
                    name: "Energy Boosting Gel Moisturizer",
                    brand: "Origins",
                  }}
                />
              </Grid>
              <Grid item xs>
                <ProductItem
                  item={{
                    image: "/images/searchResult6.png",
                    name: "Creamy moisturizing humectante cremoso",
                    brand: "Aveeno",
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <ProductItem
                  item={{
                    image: "/images/searchResult7.png",
                    name: "avena ISDIN Moisturizing Lotion",
                    brand: "Avena",
                  }}
                />
              </Grid>
              <Grid item xs>
                <ProductItem
                  item={{
                    image: "/images/searchResult8.png",
                    name: "Rose water gel cream",
                    brand: "Mamonde",
                  }}
                />
              </Grid>
              <Grid item xs>
                <ProductItem
                  item={{
                    image: "/images/searchResult9.png",
                    name: "Lip Sleeping Mask Sleeping Care",
                    brand: "Laneige",
                  }}
                />
              </Grid>
            </Grid>
            <nav>
              <ul className={classes.ul}>
                {items.map(({ page, type, selected, ...item }, index) => {
                  let children = null;

                  if (type === "start-ellipsis" || type === "end-ellipsis") {
                    children = "…";
                  } else if (type === "page") {
                    children = (
                      <button
                        className={classes.pagingButton}
                        type='button'
                        style={{
                          fontWeight: selected ? "bold" : "normal",
                          backgroundColor: selected ? colors.pink3 : "white",
                        }}
                        {...item}
                      >
                        {page}
                      </button>
                    );
                  } else {
                    children = (
                      <button
                        className={classes.pagingButton}
                        type='button'
                        {...item}
                      >
                        {type}
                      </button>
                    );
                  }

                  return <li key={index}>{children}</li>;
                })}
              </ul>
            </nav>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
