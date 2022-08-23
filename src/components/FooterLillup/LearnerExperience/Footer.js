/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyles from "assets/jss/material-kit-pro-react/components/footerStyle.js";
import commonStyles from "assets/jss/material-kit-pro-react/views/lillup/experience/commonStyles.js";
const useFooterStyles = makeStyles(footerStyles);
const useCommonStyles = makeStyles(commonStyles);

export default function Footer_Lillup_LearnerExperience(props) {
  const { children, content, theme, big, className } = props;

  const footerClasses = useFooterStyles();
  const commonClasses = useCommonStyles();
  
  const themeType =
    theme === "transparent" || theme == undefined ? false : true;
  const footerBodyClasses = classNames({
    [footerClasses.footer]: true,
    [footerClasses[theme]]: themeType,
    [footerClasses.big]: big || children !== undefined,
    [className]: className !== undefined,
  });
  const aClasses = classNames({
    [footerClasses.a]: true,
  });

  return (
    <footer className={footerBodyClasses + " " + commonClasses.footerBar}>
      <div className={commonClasses.footerContainer}>
      {/* <div className={footerClasses.container}> */}
        {children !== undefined ? (
          <div>
            <div className={footerClasses.content}>{children}</div>
            <hr />
          </div>
        ) : (
          " "
        )}
        {content}
        <div className={footerClasses.clearFix} />
      </div>
    </footer>
  );
}

Footer_Lillup_LearnerExperience.propTypes = {
  theme: PropTypes.oneOf(["dark", "white", "transparent"]),
  big: PropTypes.bool,
  content: PropTypes.node.isRequired,
};
