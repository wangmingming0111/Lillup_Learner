import {
    primaryColor,
    dangerColor,
    roseColor,
    grayColor,
    blackColor,
    whiteColor,
    hexToRgb,
} from "assets/jss/material-kit-pro-react.js";

const embedPanelStyle = (theme) => ({
    title: {
        marginLeft: "25px",
        color: whiteColor,
        fontFamily: "Roboto",
        fontSize: "20px",
    },

    fontStyle: {
        color: "#255FD0",
        fontSize: "14px",
        fontWeight: "bold",
    },

    dialog: {
		backgroundColor: "#212937",
		color: whiteColor,
		maxWidth: "800px",
		width: "800px",
		height: "500px",
	},

    modalBody: {
        paddingTop: "24px",
        paddingRight: "24px",
        paddingBottom: "16px",
        paddingLeft: "24px",
        position: "relative",
        overflow: "visible",        
    },
    modalFooter: {
        padding: "15px",
        textAlign: "center",
        paddingTop: "0",
        margin: "0",
    },

    modalClose: {
        width: "24px",
        height: "24px",        
    },

    howToTitle: {
        marginLeft: "25px",
        fontFamily: "Roboto",
        fontSize: "12px",    
    },

    howToInput: {
        marginLeft: "25px",
        marginTop: "10px",
        width: "400px",
        height: "30px",
        backgroundColor: "#131A22 !important",
        color: whiteColor,
    },

    switchBase: {
        color: primaryColor[0] + "!important",
        "&:hover": {
          backgroundColor:
            "rgba(" + hexToRgb(primaryColor[0]) + ", 0.14) !important",
        },
      },
      
      switchIcon: {
        boxShadow: "0 1px 3px 1px rgba(" + hexToRgb(blackColor) + ", 0.4)",
        color: whiteColor + "  !important",
        border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
      },
      
      switchIconChecked: {
        borderColor: primaryColor[0],
        transform: "translateX(0px)!important",
      },

      switchBar: {
        width: "30px",
        height: "15px",
        backgroundColor: "rgb(" + hexToRgb(grayColor[24]) + ")",
        borderRadius: "15px",
        opacity: "0.7!important",
      },
      
      switchChecked: {
        "& + $switchBar": {
          backgroundColor: "rgba(" + hexToRgb(primaryColor[0]) + ", 1) !important",
        },
        "& $switchIcon": {
          borderColor: primaryColor[0],
        },
      },

      labelRoot: {
        marginLeft: "-14px",
        marginRight: "-16px",
      },

      contentPanel: {
        marginLeft: "25px",
        marginTop: "20px",
        width: "400px",
        height: "150px",
        backgroundColor: "#131A22 !important",
        padding: "0px !important",
        borderBottomColor: "#131A22 !important",
        borderBottomWidth: "1px !important",
      },

      copyBtn: {
        backgroundColor: "#255FD0",
        marginTop: "10px",
        width: "400px",
        height: "50px",
        fontSize: "20px",
      },

      dismissBtn:{
        backgroundColor: "#255FD0",
        marginTop: "10px",
        width: "400px",
        height: "50px",
        fontSize: "20px",
      },

});

export default embedPanelStyle;