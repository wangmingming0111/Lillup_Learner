import {
  container,
  title,
  whiteColor,
  blackColor,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";

const desktop14PageStyles = (theme) => ({
  contentCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: "3",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    color: whiteColor,
    padding: "0 15px",
    width: "100%",
    maxWidth: "880px",
  },
  title: {
    ...title,
    fontSize: "13.7em",
    color: whiteColor,
    letterSpacing: "14px !important",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7em",
    },
  },
  subTitle: {
    fontSize: "2.25rem",
    marginTop: "0",
    marginBottom: "8px",
  },
  description: {
    fontSize: "1.125rem",
    marginTop: "0",
    marginBottom: "8px",
  },
  pageHeader: {
    color: whiteColor,
    border: "0",
    height: "100%",
    margin: "0",
    display: "flex!important",
    flexDirection: "column!important",
    // justifyContent: "center",
    alignItems: "top",
    padding: "80px 0",
    position: "relative",
    minHeight: "100vh",
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
  },
  block: {
    color: "inherit",
    // padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    // textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  left: {
    float: "left!important",
    display: "block",
    "&,& *,& *:hover,& *:focus": {
      color: "inherit !important",
    },
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
    "&,& *,& *:hover,& *:focus": {
      color: "inherit !important",
    },
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative",
  },

  portfolio_title:{
      paddingTop: "100px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "42px",
      textTransform: "uppercase",
      color: "#333333"
  },

  portfolio_content: {
      position: "absolute",
      left: "0",
      top: "0",
      // height: "917px",
      backgroundColor: "green"
  },

  cell:{
      marginTop: "29px",
      width: "682px",
      height: "366.52px",
      backgroundColor: "yellow"
  },

  wallet_group:{
      width: "682px",
      height: "88px",
      marginTop: "35.48px" 
  },

  label_Address: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#000000",
      marginRight: "500px"
  },

  address: {
      width: "682px",
      height: "56px",
      backgroundColor: "#FFFFFF",
      backgroundImage: "url(wallet-filled-money-tool (2).png)",
      border: "1px solid #D1D1D1",
      borderRadius: "10px",
      marginTop: "13px"
  },

  token_group:{
      width: "682px",
      height: "88px",
      marginTop: "24px"
  },

  label_Id: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#000000",
      marginRight: "500px"
  },

  token_Id:{
      width: "682px",
      height: "56px",
      backgroundColor: "#FFFFFF",
      backgroundImage: "url(wallet-filled-money-tool (2).png)",
      border: "1px solid #D1D1D1",
      borderRadius: "10px",
      marginTop: "13px"
  },

  publish: {
      marginTop: "50px",
      marginLeft: "70px",
      marginBottom: "88px"
  },

  publish_btn: {
      backgroundColor: "#EB1F24",
      borderRadius: "15px",
      width: "438px",
      height: "56px",        

      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "23px",
      textTransform: "uppercase",
      color: "#FFFFFF"
  },

  embed_cell: {
      marginTop: "200px",
      width: "399px",
      height: "703px",
      backgroundColor: "#444444",
      borderRadius: "11px"
  }
});

export default desktop14PageStyles;
