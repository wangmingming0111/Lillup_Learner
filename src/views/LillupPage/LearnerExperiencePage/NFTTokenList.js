import { React, memo } from "react";
import { useState, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import desktop14PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop14PageStyles.js";
import commonStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/commonStyles.js";
import buttonGroupStyle from "assets/jss/material-kit-pro-react/buttonGroupStyle.js";

const useDesktop14PageStyles = makeStyles(desktop14PageStyle);
const useCommonStyles = makeStyles(commonStyle);
const useButtonGroupStyle = makeStyles(buttonGroupStyle);

import Button from "components/CustomButtons/Button.js";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import ImageList from '@mui/material/ImageList';

import NFTTokenPanel from "views/LillupPage/LearnerExperiencePage/NFTTokenPanel.js";

const NFTTokenList = (props) => {

	NFTTokenList.propTypes = {
		metadatas: PropTypes.array.isRequired, 
		nftNotes: PropTypes.string.isRequired,
		onPrevPage: PropTypes.func.isRequired,
		onNextPage: PropTypes.func.isRequired,
		onNFTTokenSelected: PropTypes.func.isRequired,
	};	

	NFTTokenList.defaultProps = {
		metadatas: [],
		nftNotes: "",
		onPrevPage: null,
		onNextPage: null,
		onNFTTokenSelected: null,
	};

  const pageClasses = useDesktop14PageStyles();
  const commonClasses = useCommonStyles();
  const buttonGroupClasses = useButtonGroupStyle();

	return (
		<div 
			className={pageClasses.nftTokenListWrapper}
		>
			<div className={pageClasses.tokenCodeGrp}>
				<div className={buttonGroupClasses.buttonGroup}>
					<Button
						color="info"
						size="sm"
						round
						className={buttonGroupClasses.firstButton}
						onClick={props.onPrevPage}
					>
						<Remove />
					</Button>
					<Button
						color="info"
						size="sm"
						round
						className={buttonGroupClasses.lastButton}
						onClick={props.onNextPage}
					>
						<Add />
					</Button>
					<span>&nbsp;&nbsp;&nbsp;{props.nftNotes}</span>
				</div>
				{/* <img 
					src ={imageTokenCode} 
					className={pageClasses.tokenCodeGrp_Img}
				/> */}
				<ImageList
					sx={{
						transform: 'translateZ(0)',
					}}
					variant="quilted"
					cols={4}
					rowHeight={120}
					gap={0}
					className={pageClasses.tokenCodeGrp_Img}
				>
					{/* {itemData.map((item, index) => (
						<NFTTokenPanel 
							key={index} 
							item={item} 
							index={index}
							img={item.img}
							title={item.title}
							description="SubTitle"
							cols={item.cols || 1}
							rows={item.rows || 1}
							globalIndex=-1,
							onSelected={onNFTTokenSelected}
						/>
					))} */}
					{/* {nftRenderDatas} */}
					{props.metadatas.map((item, index) => (
						<NFTTokenPanel 
							key={index} 
							index={index}
							img={item.image}
							title={item.title}
							description={item.desc}
							cols={item.col || 1}
							rows={item.row || 1}
							globalIndex={item.globalIndex}
							onSelected={props.onNFTTokenSelected}
						/>
					))}
				</ImageList>                
			</div>
		</div>
	)
};

export default memo(NFTTokenList);

const itemData = [
  {
    // img: 'assets/img/lillup/experience/token_avatar.png',
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];
