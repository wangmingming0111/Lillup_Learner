import { React, memo } from "react";
import { useState, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import imageMarkCopy from "assets/img/lillup/experience/Mark_Copy.png";
import imageMarkFacebook from "assets/img/lillup/experience/Mark_Facebook.png";
import imageMarkInstagram from "assets/img/lillup/experience/Mark_Instagram.png";
import imageMarkLinkedIn from "assets/img/lillup/experience/Mark_LinkedIn.png";
import imageMarkMail from "assets/img/lillup/experience/Mark_Mail.png";
import imageMarkTelegram from "assets/img/lillup/experience/Mark_Telegram.png";
import imageMarkTwitter from "assets/img/lillup/experience/Mark_Twitter.png";
import imageMarkWhatapp from "assets/img/lillup/experience/Mark_Whatapp.png";

import desktop14PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop14PageStyles.js";

const useDesktop14PageStyles = makeStyles(desktop14PageStyle);


const SocialMediaList = (props) => {

	const pageClasses = useDesktop14PageStyles();

	return (
		<div className={pageClasses.socialNetworkGroup}>
			<div className={pageClasses.socialNetworkRow}>
				<div className={pageClasses.socialNetworkMark}>
					<img
						src={imageMarkLinkedIn}
						alt="..."
						className={pageClasses.socialNetworkMark_Img}
						// className={classes.imgRounded + " " + classes.imgFluid}
					/>
					<span className={pageClasses.socialNetworkMark_Desc}>
						Linked In
					</span>
				</div>
				<div className={pageClasses.socialNetworkMark}>
					<img
						src={imageMarkTwitter}
						alt="..."
						className={pageClasses.socialNetworkMark_Img}
						// className={classes.imgRounded + " " + classes.imgFluid}
					/>
					<span className={pageClasses.socialNetworkMark_Desc}>
						Twitter
					</span>
				</div>
				<div className={pageClasses.socialNetworkMark}>
					<img
						src={imageMarkWhatapp}
						alt="..."
						className={pageClasses.socialNetworkMark_Img}
						// className={classes.imgRounded + " " + classes.imgFluid}
					/>
					<span className={pageClasses.socialNetworkMark_Desc}>
						Whatsapp
					</span>
				</div>
				<div className={pageClasses.socialNetworkMark}>
					<img
						src={imageMarkTelegram}
						alt="..."
						className={pageClasses.socialNetworkMark_Img}
						// className={classes.imgRounded + " " + classes.imgFluid}
					/>
					<span className={pageClasses.socialNetworkMark_Desc}>
						Telegram
					</span>
				</div>
			</div>
			<div className={pageClasses.socialNetworkRow}>
				<div className={pageClasses.socialNetworkMark}>
					<img
						src={imageMarkFacebook}
						alt="..."
						className={pageClasses.socialNetworkMark_Img}
						// className={classes.imgRounded + " " + classes.imgFluid}
					/>
					<span className={pageClasses.socialNetworkMark_Desc}>
						Facebook
					</span>
				</div>
				<div className={pageClasses.socialNetworkMark}>
					<img
						src={imageMarkInstagram}
						alt="..."
						className={pageClasses.socialNetworkMark_Img}
						// className={classes.imgRounded + " " + classes.imgFluid}
					/>
					<span className={pageClasses.socialNetworkMark_Desc}>
						Instagram
					</span>
				</div>
				<div className={pageClasses.socialNetworkMark}>
					<img
						src={imageMarkMail}
						alt="..."
						className={pageClasses.socialNetworkMark_Img}
						// className={classes.imgRounded + " " + classes.imgFluid}
					/>
					<span className={pageClasses.socialNetworkMark_Desc}>
						Email
					</span>
				</div>
				<div className={pageClasses.socialNetworkMark}>
					<img
						src={imageMarkCopy}
						alt="..."
						className={pageClasses.socialNetworkMark_Img}
						// className={classes.imgRounded + " " + classes.imgFluid}
					/>
					<span className={pageClasses.socialNetworkMark_Desc}>
						Copy
					</span>
				</div>
			</div>
		</div>
	)
};

export default memo(SocialMediaList);
