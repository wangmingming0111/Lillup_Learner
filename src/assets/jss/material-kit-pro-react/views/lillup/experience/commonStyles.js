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
		lineHeight: "1.1em",
	}
});

export default commonStyles;
