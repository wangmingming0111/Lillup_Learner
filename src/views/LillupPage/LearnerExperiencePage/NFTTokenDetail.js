import { React, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Button from "components/CustomButtons/Button.js";
import ArrowBack from "@material-ui/icons/ArrowBack";

import Bar_Std from "views/LillupPage/LearnerExperiencePage/Bar_Std.js";

import desktop14PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop14PageStyles.js";
import buttonGroupStyle from "assets/jss/material-kit-pro-react/buttonGroupStyle.js";

const useDesktop14PageStyles = makeStyles(desktop14PageStyle);
const useButtonGroupStyle = makeStyles(buttonGroupStyle);

import ImageList from '@mui/material/ImageList';

import NFTTokenPanel from "views/LillupPage/LearnerExperiencePage/NFTTokenPanel.js";

const NFTTokenDetail = (props) => {

	NFTTokenDetail.propTypes = {
		metadata: PropTypes.object.isRequired, 
		onBackToPortfolio: PropTypes.func.isRequired,
	};	

	NFTTokenDetail.defaultProps = {
		metadata: {},
		onBackToPortfolio: null,
	};

  const pageClasses = useDesktop14PageStyles();
  const buttonGroupClasses = useButtonGroupStyle();

	const onBack = function () {
		if (props.onBackToPortfolio) {
			props.onBackToPortfolio();
		}
	}

	return (
		<div 
			id="nft-token-detail-wrapper"
			className={pageClasses.nftTokenDetailWrapper + " " + pageClasses.nftTokenWrapper_hidden}
		>
			<div className={pageClasses.tokenCodeGrp}>
				<div className={buttonGroupClasses.buttonGroup}>
					<Button
						color="info"
						onClick={onBack}
					>
						<ArrowBack />
					</Button>
				</div>
			</div>
			<ImageList
				sx={{
					transform: 'translateZ(0)',
				}}
				variant="quilted"
				cols={1}
				rowHeight={480}
				gap={0}
			>
				<NFTTokenPanel 
					key={1}
					index={1}
					img={props.metadata.image}
					title={props.metadata.title}
					description={props.metadata.desc}
					cols={props.metadata.col || 1}
					rows={props.metadata.row || 1}
					globalIndex={props.metadata.globalIndex}
					onSelected={null}
				/>
			</ImageList>
			<Bar_Std />
		</div>
	)
};

export default memo(NFTTokenDetail);

