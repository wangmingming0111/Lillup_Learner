import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';

import desktop14PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop14PageStyles.js";
import commonStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/commonStyles.js";

const useDesktop14PageStyles = makeStyles(desktop14PageStyle);
const useCommonStyles = makeStyles(commonStyle);

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size*cols}&h=${size*rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size*cols}&h=${size*rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

var unselectedColors = [
	"#E181B8",
	"#4598FF",
	"#F06809",
	"#5492A6",
	"#58B071",
	"#59C900",
	"#A499E2",
	"#FFBFE4",
	"#FF704D",
	"#C7C96C",
	"#72D922",
	"#F8FC51",
];

export default function NFTTokenPanel(props) {
	NFTTokenPanel.propTypes = {
		img: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		cols: PropTypes.number,
		rows: PropTypes.number,
		index: PropTypes.number.isRequired,
		globalIndex: PropTypes.number.isRequired,
		onSelected: PropTypes.func,
	};	
	NFTTokenPanel.defaultProps = {
		img: "",
		title: "",
		description: "",
		cols: 1,
		rows: 1,
		index: -1,
		globalIndex: -1,
		onSelected: null,
	};

	// console.log(props.index);

	// const [selected, setSelected] = useState(false);
	// useEffect(() => {
	// 	setSelected(false);
	// }, [props]);

	const pageClasses = useDesktop14PageStyles();

	const onClickImageListItem = function () {
		if (props.onSelected) {
			props.onSelected(props.globalIndex);
		}
		// if (selected === true) {
		// 	return;
		// }
		// setSelected(true);
	};

	// setSelected(false);
	// if (!selected)
	// {
	// 	return (
	// 		<ImageListItem 
	// 			cols={props.cols} 
	// 			rows={props.rows}
	// 			onClick={onClickImageListItem}
	// 		>
	// 			{/* <img
	// 				{...srcset(imageTokenCode, 120, props.rows, props.cols)}
	// 				alt={props.title}
	// 				loading="lazy"
	// 			/> */}
	// 			<div
	// 				style={{ 
	// 					width: "100%", 
	// 					height: "100%", 
	// 					backgroundColor: unselectedColors[props.index%unselectedColors.length], 
	// 				}}
	// 				className={pageClasses.tokenCodeGrp_Img}
	// 			/>
	// 		</ImageListItem>
	// 	)
	// }
	return (
		<ImageListItem 
			cols={props.cols} 
			rows={props.rows}
			onClick={onClickImageListItem}
		>
			<img
				{...srcset(props.img, 120, props.rows, props.cols)}
				alt="Loading..."
				loading="lazy"
				className={pageClasses.tokenCodeGrp_Img}
			/>
			<ImageListItemBar
				sx={{
					background:
						'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
						'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
				}}
				title={props.title}
				subtitle={props.description}
				position="top"
				actionIcon={
					<IconButton
						sx={{ color: 'white' }}
						// aria-label={`star ${item.title}`}
					>
						<InfoIcon />
					</IconButton>
				}
				actionPosition="left"
			/>
		</ImageListItem>
	)
};
