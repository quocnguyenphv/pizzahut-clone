import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import CouponCard from "../components/CouponCard";

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    paddingTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  contentWrapper: {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
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
  notificationBox: {
    display: "none",
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  notificationText: {
    backgroundColor: " #E9EBEE",
    borderRadius: "5px",
  },
}));

const Coupon = () => {
  const classes = useStyles();

  return (
    <Box className={classes.pageWrapper}>
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
        <Grid
          container
          justifyContent="space-evenly"
          spacing={3}
          style={{ paddingTop: "1rem" }}
        >
          <Grid item xs={12} sm={5}>
            <CouponCard />
          </Grid>
          <Grid item xs={12} sm={5}>
            <CouponCard />
          </Grid>
          {/* empty grid to align card to the left when only 1 card on a line*/}
          <Grid item xs={12} sm={5}></Grid>
        </Grid>
        <Box className={classes.notificationBox}>
          <Typography variant="h6" className={classes.notificationText}>
            Bạn hiện không có phiếu ưu đãi nào!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Coupon;
