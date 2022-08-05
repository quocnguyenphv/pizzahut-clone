import { Box, Divider, IconButton, Modal, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

const useStyles = makeStyles((theme) => ({
  modal: { display: "flex", justifyContent: "center", alignItems: "center" },
  contentWrapper: {
    backgroundColor: "white",
    width: "60vw",
    height: "70vh",
    maxWidth: "900px",
    display: "flex",
  },
  couponImage: {
    width: "100%",
    height: "100%",
  },
  detailWrapper: {
    flex: 1,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  closeButton: {
    color: "#171717",
    float: "right",
    padding: "0",
  },
  pointAndValidDate: {
    display: "flex",
    paddingTop: "2rem",
    justifyContent: "space-between",
  },
  sideBox: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    flex: 1,
  },
}));

const CouponDetail = ({ open, handleClose }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="coupon-detail"
      aria-describedby="detail-about-coupon"
      className={classes.modal}
    >
      <Box className={classes.contentWrapper}>
        <Box style={{ width: "30%" }}>
          <img
            src="https://cdn.pizzahut.vn/images/Web_V3/Member/VN-1548x1557.jpg"
            alt="header"
            className={classes.couponImage}
          />
        </Box>
        <Box className={classes.detailWrapper}>
          <Box>
            <IconButton className={classes.closeButton} onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>

          <Typography variant="h5">Tặng phần 01 Khoai Tây Chiên</Typography>
          <Box className={classes.pointAndValidDate}>
            <Box className={classes.sideBox}>
              <Typography variant="h6">Point</Typography>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                0 point
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              className={classes.sideBox}
              style={{
                paddingLeft: "0.5rem",
              }}
            >
              <Typography variant="h6">Valid until</Typography>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                05/06/2022
              </Typography>
            </Box>
          </Box>
          <Divider style={{ marginTop: "1rem" }} />
          <ul>
            <li>Tặng 1 phần Mì Ý Xốt Thịt Cà Chua</li>
          </ul>
        </Box>
      </Box>
    </Modal>
  );
};

CouponDetail.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default CouponDetail;
