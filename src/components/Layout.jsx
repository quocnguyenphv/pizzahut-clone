import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  appBarLinks: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "1rem",
    gap: "1rem",
  },
  bodyBox: {
    backgroundImage: `url("https://uat2.pizzahut.vn/static/media/background.8c532c6143e1b30fc4a3.jpg")`,
  },
  mainContainer: {
    maxWidth: "960px",
    minHeight: "85vh",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" component="h1" color="primary">
            PizzaHut
          </Typography>
          <Box className={classes.appBarLinks}>
            <Link to="/">Home</Link>
            <Link to="/coupon">Coupon</Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box className={classes.bodyBox}>
        <Container className={classes.mainContainer}>{children}</Container>
      </Box>
      <footer>
        <Box>
          <Typography variant="body2" style={{ textAlign: "center" }}>
            PizzaHut 2022
          </Typography>
        </Box>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
