import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../global/constants";
import Rating from "@material-ui/lab/Rating";
import { PinkButton } from "../Headers/useStyle";
import { SimpleDialog } from "../../components/PopUp/popUp";

const ProductDescription = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderCategoryItem = (title) => {
    return (
      <div className={classes.filterApplied}>
        <span
          style={{
            fontSize: 14,
            marginLeft: "5px",
            marginRight: "5px",
            color: colors.gray5,
          }}
        >
          {title}
        </span>
      </div>
    );
  };

  return (
    <>
      <Typography className={classes.subTitle}>
        Làm sáng, dưỡng trắng
      </Typography>
      <Typography className={classes.title} variant="h4">
        Jeju Cherry Blossom Tone-up Cream
      </Typography>
      <Typography className={classes.origin} color="textPrimary">
        {`Innisfree `}
        <img
          src="data:image/png;base64,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"
          height={20}
          width={"auto"}
        />
      </Typography>
      <div style={{ display: "inline-flex" }}>
        <div>
          <Typography
            style={{ fontSize: 18, marginTop: 5, marginBottom: 5 }}
            color="textPrimary"
          >
            3.0
          </Typography>
        </div>
        <div>
          <Rating
            name="read-only"
            value={3}
            readOnly
            className={classes.star}
            style={{ marginTop: 5, marginBottom: 5 }}
          />
        </div>
        <div>
          <Typography
            color="textSecondary"
            style={{ marginTop: 5, marginBottom: 5 }}
          >
            (200 bình chọn)
          </Typography>
        </div>
      </div>
      <Typography
        style={{ fontSize: 18, marginTop: 5, marginBottom: 5 }}
        color="textPrimary"
      >
        Phân loại sản phẩm
      </Typography>
      {renderCategoryItem("Kem dưỡng")}
      {renderCategoryItem("Da thường")}
      <br />
      <Typography style={{ marginTop: 20 }} />
      <PinkButton variant="contained" color="primary" onClick={handleClickOpen}>
        Thêm vào routine
      </PinkButton>
      <SimpleDialog open={open} onClose={handleClose} />
    </>
  );
};

const useStyles = makeStyles({
  subTitle: {
    color: colors.pink4,
    fontSize: 18,
  },
  title: {
    color: colors.redPink,
    fontWeight: "bold",
  },
  origin: {
    fontSize: 18,
    marginTop: 30,
  },
  rating: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  star: {
    marginLeft: 5,
    marginRight: 5,
  },
  filterApplied: {
    marginRight: "7px",
    display: "inline-flex",
    border: "solid",
    borderRadius: "17px",
    borderWidth: 1,
    padding: "4px",
    borderColor: colors.pink4,
    fontSize: 15,
  },
});

export default ProductDescription;
