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
  const buttonGroupClasses = useButtonGroupStyle();

	return (
		<div 
			id="nft-token-list-wrapper"
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
				<ImageList
					sx={{
						transform: 'translateZ(0)',
					}}
					variant="quilted"
					cols={4}
					rowHeight={120}
					gap={0}
				>
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

