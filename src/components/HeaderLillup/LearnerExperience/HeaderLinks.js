/* eslint-disable */
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

import Apps from "@material-ui/icons/Apps";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";
import ExitToApp from "@material-ui/icons/ExitToApp";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import commonStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/commonStyles.js";

const useStyles = makeStyles(styles);
const useCommonStyle = makeStyles(commonStyle);

export default function HeaderLinks_Lillup_LearnerExperience(props) {

  // const [nftBalances, setNFTBalances] = useState({
  //   length: 0,
  //   datas: [],
  // });

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  var onClickGetNFTBalances = function() {
    // console.log("----" + nftBalances);

    // var length = nftBalances.length;
    // length++;
    // var datas = nftBalances.datas;
    // datas.push(length);
    // setNFTBalances(previousState => {
    //   return { 
    //     ...previousState, 
    //     length: length,
    //     datas: datas,
    //   }
    // });

    props.onGetNFTBalancesCallback();
  };

  const { dropdownHoverColor } = props;

  const classes = useStyles();
  const commonClasses = useCommonStyle();

  if (!props.isAuthenticated) {
    return (
      <List className={classes.list + " " + classes.mlAuto}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            hoverColor={dropdownHoverColor}
            buttonText="Learner-Experience"
            buttonProps={{
              className: classes.navLink + " " + commonClasses.headerNavLink,
              color: "transparent",
            }}
            buttonIcon={Apps}
            dropdownList={[
              // <Link to="/lillup/learner/experience/desktop-13" className={classes.dropdownLink}>
              //   <Layers className={classes.dropdownIcons} />
              //   Desktop-13
              // </Link>,
              <Link to="/lillup/learner/experience/desktop-14" className={classes.dropdownLink}>
                <Layers className={classes.dropdownIcons} />
                Desktop-14
            </Link>,
          ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button block round color="info" onClick={props.onAuthenticateCallback}>
            <AccountCircle /> Authenticate
          </Button>
        </ListItem>
      </List>
    );
  }
  else {
    return (
      <List className={classes.list + " " + classes.mlAuto}>
        {/* <ListItem className={classes.listItem}>
          <span>My NFT data length is {nftBalances.length}</span>
        </ListItem> */}
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            hoverColor={dropdownHoverColor}
            buttonText="Learner-Experience"
            buttonProps={{
              className: classes.navLink + " " + commonClasses.headerNavLink,
              color: "transparent",
            }}
            buttonIcon={Apps}
            dropdownList={[
              // <Link to="/lillup/learner/experience/desktop-13" className={classes.dropdownLink}>
              //   <Layers className={classes.dropdownIcons} />
              //   Desktop-13
              // </Link>,
              <Link to="/lillup/learner/experience/desktop-14" className={classes.dropdownLink}>
                <Layers className={classes.dropdownIcons} />
                Desktop-14
            </Link>,
          ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button block round color="primary" onClick={props.onLogoutCallback}>
            <ExitToApp /> Logout
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button block round color="info" onClick={onClickGetNFTBalances}>
            TEST NFT
          </Button>
        </ListItem>
      </List>
    );
  }
}

HeaderLinks_Lillup_LearnerExperience.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks_Lillup_LearnerExperience.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
