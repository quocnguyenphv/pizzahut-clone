import {
  Box,
  Button,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  useCouponButton: {
    marginTop: "1rem",
    width: "100%",
    backgroundColor: "#0A8020",
    color: "#fff",
    fontWeight: "bold",
  },
  couponImage: {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    paddingBottom: "0.3rem",
  },
  leftHalfCircle: {
    backgroundColor: "#fff",
    position: "absolute",
    left: "-1rem",
    borderRadius: "0 50% 50% 0",
    padding: "14px 15px",
    boxShadow: "inset -7px 0 9px -7px  rgb(0 0 0 / 20%)",
  },
  rightHalfCircle: {
    backgroundColor: "#fff",
    position: "absolute",
    right: "-1rem",
    borderRadius: "50%",
    padding: "14px 15px",
    boxShadow: "inset 7px 0 9px -7px rgb(0 0 0 / 20%)",
  },
}));

const CouponCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper
        style={{
          paddingBottom: "1rem",
          position: "relative",
        }}
      >
        <CardMedia
          src="https://cdn.pizzahut.vn/images/Web_V3/Products/Mua_1_tang_1_ALC_Regular_Vn_400x275.jpg"
          title="coupon name"
          component="img"
          className={classes.couponImage}
        />
        <span className={classes.leftHalfCircle}></span>
        <span className={classes.rightHalfCircle}></span>
      </Paper>

      <Paper
        style={{
          padding: "0.8rem",
          borderTop: "1px dashed #E9EBEE",
        }}
      >
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              gutterBottom
              variant="body1"
              style={{ fontWeight: "bold" }}
            >
              Coupon title
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Ngày hết hạn: 20/02/2023
            </Typography>
          </Box>
          <IconButton
            style={{
              color: "#0A8020",
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>

        <Button variant="contained" className={classes.useCouponButton}>
          Sử dụng ngay
        </Button>
      </Paper>
    </div>
  );
};

export default CouponCard;
