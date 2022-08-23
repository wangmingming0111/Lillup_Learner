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
  container: {
    // this is important!
    // ...container,
    zIndex: "3",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
    },
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
    flexDirection: "column",
    paddingLeft: "0",
    paddingRight: "0",
    paddingTop: "0",
    paddingBottom: "0",
    position: "relative",
    minHeight: "100vh",
    alignItems: "top",
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
  footer: {
    position: "absolute",
    width: "100%",
    // background: "transparent",
    bottom: "0",
    color: whiteColor,
    zIndex: "2",
  },

  portfolio_title:{
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "42px",
      textTransform: "uppercase",
      color: "#333333"
  },

  portfolio_content: {
      position: "relative",
      left: "0",
      top: "0",
      marginTop: "50px",
      backgroundColor: "white"
  },

  cell:{
      marginTop: "29px",
      width: "652px",
      height: "336.52px",
  },

  wallet_group:{
      width: "682px",
      height: "88px",
      marginTop: "100.48px" 
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
      backgroundImage: "url(" + "assets/img/lillup/exerience/wallet_avarta.png" + ")",
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
  },

  leftPanel : {
    backgroundColor: "red",
    color: "white",
    borderStyle: "solid",
    borderWidth: "5px",
    borderColor: "white",
    borderRadius: "3%",

    display: "flex!important",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
  },

  rightPanel : {
    backgroundColor: "blue",
    color: "white",
    borderStyle: "solid",
    borderWidth: "5px",
    borderColor: "white",
    borderRadius: "3%",

    display: "flex!important",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
  },

  socialNetworkTitle: {
    paddingTop: "50px",
    paddingBottom: "20px",
  },

  socialNetworkGroup: {
    display: "flex!important",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",

    padding:"10px",
  },

  socialNetworkRow: {
    display: "flex!important",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  socialNetworkMark: {
    // borderStyle: "solid",
    // borderWidth: "2px",
    // borderColor: "white",
    // borderRadius: "10%",

    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "10px",
    paddingBottom: "5px",

    margin: "10px",
    width: "100px",
    height: "100px",

    cursor: "pointer",
    textAlign: "center",

    color: "white",
    "&:hover": {
      color: "red",
    },

    fontFamily: "Roboto Slab,Times New Roman,serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",

    display: "flex!important",
    flexDirection: "column",
    // flexWrap: "wrap",
    // alignContent: "space-around",
    justifyContent: "space-around",
    alignItems: "center",
  },

  QRCodeGroup: {
    display: "flex!important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding:"10px",
  },

  embeddedGroup: {
    display: "flex!important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding:"2px",
    width: "100%",

    // borderStyle: "solid",
    // borderWidth: "2px",
    // borderColor: "white",
    // borderRadius: "5px",
  },

  embeddedBtn: {
    width: "80%",
    height: "50px",

    maxWidth: "500px",

    borderRadius: "10px",

    fontFamily: "Roboto Slab,Times New Roman,serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
  },

});

export default desktop14PageStyles;
