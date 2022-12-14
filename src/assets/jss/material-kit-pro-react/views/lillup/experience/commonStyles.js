const commonStyles = (theme) => ({
  toolbarContainer: {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "50px",
    width: "100%",
    // marginLeft: "15px",
    // marginRight: "15px",
    // paddingLeft: "15px",
    // paddingRight: "15px",
    marginLeft: "0.8rem",
    marginRight: "0.8rem",
    paddingLeft: "0.2rem",
    paddingRight: "0.2rem",
  },
  footerBar: {
    color: "#FFF",
    width: "100%",
    bottom: "0",
    zIndex: "2",
    position: "absolute",
    // background: "transparent",
  },
  footerContainer: {
    zIndex: "2",
    width: "100%",
    marginLeft: "0.8rem",
    marginRight: "0.8rem",
    marginTop: "0",
    marginBottom: "0",
    paddingLeft: "1.2rem",
    paddingRight: "1.2rem",
		paddingTop: "0",
		paddingBottom: "0",
  },
	footerLinkItem: {
		fontSize: "16px",
		lineHeight: "1.2em",
	},
  pageContent: {
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "130px",
    paddingBottom: "300px",
    // paddingLeft: "4rem",
    // paddingRight: "4rem",
    // paddingTop: "10rem",
    // paddingBottom: "18rem",
  },

  headerBrand: {
    lineHeight: "70px",
    fontSize: "40px",
  },
  headerBrandLink: {
    color: "white",
  },
  headerNavLink: {
    fontSize: "20px",
  },

});

export default commonStyles;
