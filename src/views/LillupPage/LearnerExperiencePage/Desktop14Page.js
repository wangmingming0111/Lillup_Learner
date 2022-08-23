/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components

import Header_Lillup_LearnerExperience from "components/HeaderLillup/LearnerExperience/Header";
import HeaderLinks_Lillup_LearnerExperience from "components/HeaderLillup/LearnerExperience/HeaderLinks";
import Footer_Lillup_LearnerExperience from "components/FooterLillup/LearnerExperience/Footer.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

// import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import desktop14PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop14PageStyles.js";
import commonStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/commonStyles.js";

import image from "assets/img/lillup-learner-experience-desktop-13.jpg";
import wallet_img from "assets/img/lillup/experience/wallet_avatar.png";
// import token_img from "assets/img/lillup/experience/token_avatar.png";
import cardProduct1 from "assets/img/examples/card-product1.jpg";

const useDesktop14PageStyles = makeStyles(desktop14PageStyle);
const useCommonStyles = makeStyles(commonStyle);

export default function Desktop14Page({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const pageClasses = useDesktop14PageStyles();
  const commonClasses = useCommonStyles();
  
  return (
    <div>
      <Header_Lillup_LearnerExperience
        absolute
        // color="transparent"
        color="success"
        brand="www.lillup.com"
        links={<HeaderLinks_Lillup_LearnerExperience dropdownHoverColor="dark" />}
        {...rest}
      />
      <div
        className={pageClasses.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={pageClasses.container}>
          <GridContainer direction="row">
            <GridItem 
              xs={12} sm={12} md={7}
              className={pageClasses.leftPanel}>
              <div className={pageClasses.portfolio_content}>
                  <h1 className={pageClasses.portfolio_title}>PORTFOLIO</h1>
                  <div className={pageClasses.cell}></div>            
                  <div className={pageClasses.wallet_group}>
                    <span className={pageClasses.label_Address}>Wallet Address</span>
                    <input className={pageClasses.address}
                      style={{
                        backgroundImage: "url(" + wallet_img + ")",
                        backgroundSize: "20px, 20px",
                        backgroundPosition: "left",
                      }}
                    />
                  </div>
                  <div className={pageClasses.token_group}>
                    <span className={pageClasses.label_Id}>Token Id</span>
                    <input className={pageClasses.token_Id}/>
                  </div>
                  <div className={pageClasses.publish}>
                    <Button className={pageClasses.publish_btn}>PUBLISH</Button>
                  </div>
              </div>
            </GridItem>
            <GridItem 
              xs={12} sm={12} md={5}
              className={pageClasses.rightPanel}>
              <h2 className={pageClasses.subTitle}>404 Page not found : 1</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 2</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 3</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 4</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 5</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 6</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 7</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 8</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 9</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 10</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 11</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 12</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 13</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 14</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 15</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 16</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 17</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 18</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 19</h2>
              <h2 className={pageClasses.subTitle}>404 Page not found : 20</h2>
            </GridItem>
          </GridContainer>
        </div>
        <Footer_Lillup_LearnerExperience
          className={pageClasses.footer}
          theme="dark"
          // big
          content={
            <div>
              <div className={pageClasses.left}>
                <GridContainer>
                  {/* <GridItem xs={12} sm={6} md={6} lg={3}> */}
                  <GridItem xs={6} sm={3} md={3} lg={1}>
                    <Button color="twitter" round justIcon>
                      <i className="fab fa-twitter" />
                    </Button>
                    <br />
                    <Button color="linkedin" round justIcon>
                      <i className="fab fa-linkedin-in" />
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={pageClasses.right}>
                <List className={pageClasses.dense} dense>
                  <ListItem className={commonClasses.footerLinkItem}>
                    <a target="_blank" href="#" className={pageClasses.block}>
                      Creator
                    </a>
                  </ListItem>
                  <ListItem className={commonClasses.footerLinkItem}>
                    <a target="_blank" href="#" className={pageClasses.block}>
                      Learner
                    </a>
                  </ListItem>
                  <ListItem className={commonClasses.footerLinkItem}>
                    <a target="_blank" href="#" className={pageClasses.block}>
                      Explore
                    </a>
                  </ListItem>
                  <ListItem className={commonClasses.footerLinkItem}>
                    <a target="_blank" href="#" className={pageClasses.block}>
                      Documentation
                    </a>
                  </ListItem>
                  <ListItem className={commonClasses.footerLinkItem}>
                    <a target="_blank" href="#" className={pageClasses.block}>
                      Stakeholder
                    </a>
                  </ListItem>
                  <ListItem className={commonClasses.footerLinkItem}>
                    <a target="_blank" href="#" className={pageClasses.block}>
                      About Us
                    </a>
                  </ListItem>
                  <ListItem className={commonClasses.footerLinkItem}>
                    <a target="_blank" href="#" className={pageClasses.block}>
                      Blog
                    </a>
                  </ListItem>
                </List>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
