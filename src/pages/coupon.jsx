import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    minHeight: "70vh",
  },
  headerImage: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  mobileHeaderImage: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  headerTextWrapper: {
    padding: "10px 0 4px 0",
  },
  headerText: {
    color: "#A80000",
    fontSize: "25px",
    fontWeight: "bold",
  },
  headerSecondaryText: {
    fontSize: "14px",
  },
}));

const Coupon = () => {
  const classes = useStyles();

  return (
    <Box style={{ paddingTop: "2rem" }}>
      <Paper className={classes.contentWrapper}>
        <img
          src="https://cdn.pizzahut.vn/images/Web_V3/Member/3054x201.jpg"
          alt="header"
          className={classes.headerImage}
        />
        <img
          src="https://cdn.pizzahut.vn/images/Web_V3/Member/2301x843.jpg"
          alt="mobile header"
          className={classes.mobileHeaderImage}
        />
        <Box className={classes.headerTextWrapper}>
          <Typography
            className={classes.headerText}
            variant="h5"
            component="h1"
            align="center"
          >
            🍕🍕 PHIẾU ƯU ĐÃI CỦA TÔI
          </Typography>
          <Typography
            className={classes.headerSecondaryText}
            variant="h6"
            component="h2"
            align="center"
          >
            Phiếu ưu đãi bạn nhận được thông qua đổi điểm
            <br />
            hoặc các chương trình khuyến mãi của Pizza Hut!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Coupon;
