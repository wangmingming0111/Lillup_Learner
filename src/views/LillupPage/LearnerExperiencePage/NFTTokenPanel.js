import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import desktop14PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop14PageStyles.js";

const useDesktop14PageStyles = makeStyles(desktop14PageStyle);

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size*cols}&h=${size*rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size*cols}&h=${size*rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

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

	const pageClasses = useDesktop14PageStyles();

	const onClickImageListItem = (e) => {
    e.preventDefault();
		if (props.onSelected) {
			props.onSelected(props.globalIndex);
		}
	};

	return (
		<ImageListItem 
			cols={props.cols} 
			rows={props.rows}
			onClick={onClickImageListItem}
			className={pageClasses.tokenCodeGrp_Img}
			>
			<img
				{...srcset(props.img, 120, props.rows, props.cols)}
				alt="Loading..."
				loading="lazy"
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
