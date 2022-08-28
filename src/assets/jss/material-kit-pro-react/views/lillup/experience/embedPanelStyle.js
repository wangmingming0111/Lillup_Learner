import {
  whiteColor,
  blackColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";

const embedPanelStyle = (theme) => ({
	panelBgColor: {
		backgroundColor: "yellow",
	},

	panelSize: {
		width: "auto",
		height: "100%",
	},

	dialog: {
		backgroundColor: "#212937",
		color: whiteColor,
		maxWidth: "800px",
		width: "800px",
		height: "500px",
	},

});

export default embedPanelStyle;