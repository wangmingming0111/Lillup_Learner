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
    backgroundColor: "white",
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
      background: "rgba(" + hexToRgb(whiteColor) + ", 0.5)",
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
    fontSize: "18px",
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
    height: "250px",
    // background: "transparent",
    bottom: "0",
    color: whiteColor,
    zIndex: "2",
  },

  portfolioTitleGrp: {
    // borderStyle: "solid",
    // borderWidth: "2px",
    // borderColor: "white",
    // borderRadius: "2px",

    textAlign: "left",
    width: "100%",

    // paddingTop: "50px",
    paddingTop: "20px",
    paddingBottom: "20px",
    // paddingTop: "4rem",
    // paddingBottom: "1.4rem",
  },

  portfolioTitle:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "40px",
    // fontSize: "2.4rem",
    // fontSize: "2.8vw",
    
    lineHeight: "42px",
    // lineHeight: "2.9vw",

    textTransform: "uppercase",
    
    // color: "#333333"
    color: "black"
  },

  nftTokenListWrapper: {
    display: "block",
    padding: "0px",
    margin: "0px",

    // borderStyle: "solid",
    // borderWidth: "2px",
    // borderColor: "black",
    // borderRadius: "2px",
  },

  nftTokenListWrapper_hidden: {
    display: "none",
  },

  tokenCodeGrp: {
    // borderStyle: "solid",
    // borderWidth: "2px",
    // borderColor: "white",
    // borderRadius: "2px",

    display: "flex!important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding:"0",
  },

  tokenCodeGrp_Img: {
    width: "100%",
    height: "auto",
    // width: "24rem",
    // height: "24rem",
    // width: "23vw",
    // height: "23vw",
    cursor: "pointer",
  },

  walletGroup:{
    // borderStyle: "solid",
    // borderWidth: "2px",
    // borderColor: "white",
    // borderRadius: "2px",

    display: "flex!important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",

    padding:"0",

    marginTop: "30px",
    marginBottom: "30px",
  },

  walletGroup_Label: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    // fontSize: "1.0rem",
    // fontSize: "1.5vw",

    lineHeight: "30px",
    // lineHeight: "2.1vw",

    color: "#000000",
  },

  walletGroup_Input: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    // fontSize: "1.0rem",
    // fontSize: "1.5vw",

    lineHeight: "30px",
    // lineHeight: "2.1vw",

    color: "#000000",
  },

  // address: {
  //     width: "682px",
  //     height: "56px",
  //     backgroundColor: "#FFFFFF",
  //     backgroundImage: "url(wallet-filled-money-tool (2).png)",
  //     border: "1px solid #D1D1D1",
  //     borderRadius: "10px",
  //     marginTop: "13px"
  // },

  tokenGroup:{
    // borderStyle: "solid",
    // borderWidth: "2px",
    // borderColor: "white",
    // borderRadius: "2px",

    display: "flex!important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",

    padding:"0",

    marginTop: "0",
    marginBottom: "30px",
  },

  tokenGroup_Label: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    // fontSize: "1.0rem",
    // fontSize: "1.5vw",

    lineHeight: "30px",
    // lineHeight: "2.1vw",

    color: "#000000",
  },

  tokenGroup_Input: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    // fontSize: "1.0rem",
    // fontSize: "1.5vw",

    lineHeight: "30px",
    // lineHeight: "2.1vw",

    color: "#000000",
  },

  // unused class name(only in Desktop-13)
  token_Id:{
      width: "682px",
      height: "56px",
      backgroundColor: "#FFFFFF",
      backgroundImage: "url(" + "assets/img/lillup/exerience/wallet_avarta.png" + ")",
      border: "1px solid #D1D1D1",
      borderRadius: "10px",
      marginTop: "13px"
  },

  publishGrp: {
    display: "flex!important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding:"2px",
    width: "100%",

    marginTop: "30px",
    // marginTop: "1.6rem",
    // marginTop: "2vw",
    marginBottom: "50px",
    // marginBottom: "3rem",
    // marginBottom: "3.5vw",

    // borderStyle: "solid",
    // borderWidth: "2px",
    // borderColor: "white",
    // borderRadius: "5px",    
  },

  publishBtn: {
    width: "80%",
    height: "auto",

    maxWidth: "400px",
    // maxWidth: "24rem",
    // maxWidth: "28vw",

    borderRadius: "10px",
    // borderRadius: "0.6rem",
    // borderRadius: "0.7vw",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    // fontSize: "1.2rem",
    // fontSize: "1.4vw",
  },

  embed_cell: {
      marginTop: "200px",
      width: "399px",
      height: "703px",
      backgroundColor: "#444444",
      borderRadius: "11px"
  },

  leftPanel : {
    backgroundColor: "white",
    color: "black",

    // borderStyle: "solid",
    // borderWidth: "5px",
    // borderColor: "white",
    // borderRadius: "3%",

    // paddingLeft: "80px",
    // paddingLeft: "10vw",
    // paddingLeft: "10%",

    display: "flex!important",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "right",
  },

  rightPanel : {
    backgroundColor: "white",
    color: "black",

    // borderStyle: "solid",
    // borderWidth: "5px",
    // borderColor: "white",
    // borderRadius: "3%",

    // paddingRight: "80px",
    // paddingRight: "5.6vw",
    // paddingRight: "5%",

    display: "flex!important",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
  },

  socialNetworkTitle: {
    // paddingTop: "50px",
    paddingTop: "20px",
    paddingBottom: "20px",
    // paddingTop: "4rem",
    // paddingBottom: "1.4rem",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "48px",
    // fontSize: "4rem",
    // fontSize: "3.5vw",

    color: "black",
  },

  socialNetworkGroup: {
    // borderStyle: "solid",
    // borderWidth: "1px",
    // borderColor: "black",
    // borderRadius: "3px",

    display: "flex!important",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",

    width: "100%",
    padding:"10px",
    // padding:"0.8rem",
  },

  socialNetworkRow: {
    // borderStyle: "solid",
    // borderWidth: "1px",
    // borderColor: "black",
    // borderRadius: "5px",

    width: "100%",

    display: "flex!important",
    flexDirection: "row",
    justifyContent: "space-around",
    // justifyContent: "center",
    alignItems: "center",
  },

  socialNetworkMark: {
    // borderStyle: "solid",
    // borderWidth: "1px",
    // borderColor: "black",
    // borderRadius: "5px",

    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "10px",
    paddingBottom: "5px",
    // paddingLeft: "0.8rem",
    // paddingRight: "0.8rem",
    // paddingTop: "0.8rem",
    // paddingBottom: "0.4rem",
    // paddingLeft: "0.5vw",
    // paddingRight: "0.5vw",
    // paddingTop: "0.5vw",
    // paddingBottom: "0.25vw",

    // paddingLeft: "0",
    // paddingRight: "0",
    // paddingTop: "0",
    // paddingBottom: "0",

    margin: "2px",
    // margin: "10px",
    // margin: "0.8rem",

    width: "100px",
    height: "100px",

    // width: "100px",
    // height: "100px",
    // width: "6rem",
    // height: "6rem",
    // width: "7vw",
    // height: "7vw",

    cursor: "pointer",
    textAlign: "center",

    color: "black",
    "&:hover": {
      color: "red",
      fontWeight: "bold",

      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "white",
      borderRadius: "5px",
    },

    display: "flex!important",
    flexDirection: "column",
    // flexWrap: "wrap",
    // alignContent: "space-around",
    justifyContent: "space-between",
    alignItems: "center",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    // fontSize: "1vw",

    "@media (min-width: 576px)": {
      width: "50px",
      height: "50px",
      maxWidth: "50px",
      maxHeight: "50px",
      fontSize: "8px",
    },
    "@media (min-width: 768px)": {
      width: "70px",
      height: "70px",
      maxWidth: "70px",
      maxHeight: "70px",
      fontSize: "10px",
    },
    "@media (min-width: 990px)": {
      width: "90px",
      height: "90px",
      maxWidth: "90px",
      maxHeight: "90px",
      fontSize: "12px",
    },
    "@media (min-width: 1200px)": {
      width: "100px",
      height: "100px",
      maxWidth: "100px",
      maxHeight: "100px",
      fontSize: "14px",
    },
  },

  socialNetworkMark_Img: {
    width: "45px",
    height: "45px",
    // width: "2.8rem",
    // height: "2.8rem",
    // width: "3.2vw",
    // height: "3.2vw",

    // paddingLeft: "0",
    // paddingRight: "0",
    // paddingTop: "0",
    // paddingBottom: "0",

    // margin: "0",

    "@media (min-width: 576px)": {
      width: "30px",
      height: "30px",
      maxWidth: "30px",
      maxHeight: "30px",
    },
    "@media (min-width: 768px)": {
      width: "35px",
      height: "35px",
      maxWidth: "35px",
      maxHeight: "35px",
    },
    "@media (min-width: 990px)": {
      width: "40px",
      height: "40px",
      maxWidth: "40px",
      maxHeight: "40px",
    },
    "@media (min-width: 1200px)": {
      width: "45px",
      height: "45px",
      maxWidth: "45px",
      maxHeight: "45px",
    },
  },

  socialNetworkMark_Desc: {
    width: "80px",
    height: "20px",

    "@media (min-width: 576px)": {
      width: "65px",
      height: "14px",
      maxWidth: "65px",
      maxHeight: "14px",
    },
    "@media (min-width: 768px)": {
      width: "70px",
      height: "16px",
      maxWidth: "70px",
      maxHeight: "16px",
    },
    "@media (min-width: 992px)": {
      width: "75px",
      height: "18px",
      maxWidth: "75px",
      maxHeight: "18px",
    },
    "@media (min-width: 1200px)": {
      width: "80px",
      height: "20px",
      maxWidth: "80px",
      maxHeight: "20px",
    },
  },

  qrCodeGroup: {
    // borderStyle: "solid",
    // borderWidth: "2px",
    // borderColor: "black",
    // borderRadius: "10px",

    display: "flex!important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",

    padding:"0",
    marginTop: "30px",
  },

  qrCodeGroup_Link: {
    cursor: "pointer",
    padding:"0",
    margin: "0",
  },

  qrCodeGroup_Img: {
    width: "350px",
    height: "350px",
    // width: "400px",
    // height: "400px",
    // width: "24rem",
    // height: "24rem",
    // width: "23vw",
    // height: "23vw",

    "@media (min-width: 576px)": {
      width: "200px",
      height: "200px",
      maxWidth: "200px",
      maxHeight: "200px",
    },
    "@media (min-width: 768px)": {
      width: "250px",
      height: "250px",
      maxWidth: "250px",
      maxHeight: "250px",
    },
    "@media (min-width: 990px)": {
      width: "300px",
      height: "300px",
      maxWidth: "300px",
      maxHeight: "300px",
    },
    "@media (min-width: 1200px)": {
      width: "350px",
      height: "350px",
      maxWidth: "350px",
      maxHeight: "350px",
    },
  },

  embeddedGroup: {
    display: "flex!important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding:"2px",
    width: "100%",

    marginTop: "30px",
    // marginTop: "1.6rem",
    // marginTop: "2vw",
    marginBottom: "50px",
    // marginBottom: "3rem",
    // marginBottom: "3.5vw",

    // borderStyle: "solid",
    // borderWidth: "2px",
    // borderColor: "black",
    // borderRadius: "5px",    
  },

  embeddedBtn: {
    width: "80%",
    height: "auto",

    maxWidth: "400px",
    // maxWidth: "24rem",
    // maxWidth: "28vw",

    borderRadius: "10px",
    // borderRadius: "0.6rem",
    // borderRadius: "0.7vw",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    // fontSize: "1.2rem",
    // fontSize: "1.4vw",
  },

});

export default desktop14PageStyles;
