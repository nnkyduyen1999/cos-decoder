import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Collapse,
  Container,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Select,
  TextField,
} from "@material-ui/core";
import {
  CloseOutlined,
  ExpandLess,
  ExpandMore,
  SearchOutlined,
} from "@material-ui/icons/";
import { useState } from "react";
import "./search.css";
import "../global/constants";
import { colors } from "../global/constants";

export default function Search() {
  const [typeOpen, setTypeOpen] = useState(true);
  const [filterOpen, setFilterOpen] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [filter, setFilter] = useState("Phổ biến");

  const handleChangeFilter = (event) => {
    const name = event.target.filter;
    setFilter(name);
  };

  return (
    <div>
      <Container fixed>
        <Grid container spacing={8}>
          <Grid item xs={3}>
            <Box boxShadow={3} borderRadius={8} minWidth={280}>
              <List>
                <ListItem
                  button
                  onClick={() => {
                    setTypeOpen(!typeOpen);
                  }}
                >
                  <ListItemText primary="PHÂN LOẠI" />
                  {typeOpen ? <ExpandMore /> : <ExpandLess />}
                </ListItem>
                <Collapse in={typeOpen} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    style={{ marginLeft: "30px" }}
                    disablePadding
                  >
                    <ListItemText secondary="Chăm sóc da mặt"></ListItemText>
                    <ListItemText secondary="Cạo râu nam"></ListItemText>
                    <ListItemText secondary="Chăm sóc cơ thể"></ListItemText>
                    <ListItemText secondary="Chăm sóc tóc"></ListItemText>
                    <ListItemText secondary="Make up"></ListItemText>
                    <ListItemText secondary="Nước hoa"></ListItemText>
                    <ListItemText secondary="Chăm sóc móng"></ListItemText>
                  </List>
                </Collapse>
              </List>
            </Box>
            <h3>LỌC:</h3>
            <Box boxShadow={3} borderRadius={8} minWidth={280}>
              <List>
                <ListItem
                  button
                  onClick={() => {
                    setFilterOpen(!filterOpen);
                  }}
                >
                  <ListItemText primary="THÀNH PHẦN" />
                  {filterOpen ? <ExpandMore /> : <ExpandLess />}
                </ListItem>
                <Collapse in={filterOpen} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    style={{ marginLeft: "20px" }}
                    disablePadding
                  >
                    <i style={{ fontSize: "14px", color: colors.gray4 }}>
                      Hiệu quả đáng chú ý trên thành phần:
                    </i>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<ListItemText secondary="Chống tia UV" />}
                    />
                    <br />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<ListItemText secondary="Làm sáng" />}
                    />
                    <br />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<ListItemText secondary="Trị mụn" />}
                    />
                    <br />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <ListItemText secondary="Hỗ trợ làm lành vết thương" />
                      }
                    />
                    <br />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<ListItemText secondary="Chống lão hóa" />}
                    />
                    <br />
                    <i style={{ fontSize: "14px", color: colors.gray4 }}>
                      Thành phần phổ biến:
                    </i>
                    <br />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<ListItemText secondary="AHA" />}
                    />
                    <br />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<ListItemText secondary="BHA" />}
                    />
                    <br />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<ListItemText secondary="PHA" />}
                    />
                    <br />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<ListItemText secondary="Azelic Acid" />}
                    />
                    <br />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<ListItemText secondary="Ceramide" />}
                    />
                    <br />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<ListItemText secondary="Vitamin A" />}
                    />
                    <br />
                    <Button className="apply-button">ÁP DỤNG</Button>
                  </List>
                </Collapse>
              </List>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <form>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Search"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
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
              <div className="filter-applied">
                <span style={{ fontSize: "17px", marginLeft: "5px" }}>
                  whamisa
                </span>
                <CloseOutlined />
              </div>
              <div className="filter-applied">
                <span style={{ fontSize: "17px", marginLeft: "5px" }}>
                  Dùng cho mặt
                </span>
                <CloseOutlined />
              </div>
              <div className="filter-applied">
                <span style={{ fontSize: "17px", marginLeft: "5px" }}>
                  Da khô
                </span>
                <CloseOutlined />
              </div>
            </div>
            <br />
            <FormControl
              variant="outlined"
              size="small"
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
                <option value={0}>Phổ biến</option> />
                <option value={1}>Cũ nhất</option>
                <option value={2}>Mới nhất</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
