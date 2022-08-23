/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components

import Header_Lillup_LearnerExperience from "components/HeaderLillup/LearnerExperience/Header";
import HeaderLinks_Lillup_LearnerExperience from "components/HeaderLillup/LearnerExperience/HeaderLinks";

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import desktop13PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop13PageStyles.js";

import image from "assets/img/lillup-learner-experience-desktop-13.jpg";

import cardProduct1 from "assets/img/examples/card-product1.jpg";

const useStyles = makeStyles(desktop13PageStyle);

export default function Desktop13Page({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header_Lillup_LearnerExperience
        absolute
        // color="transparent"
        color="success"
        brand="Material Kit PRO React"
        links={<HeaderLinks_Lillup_LearnerExperience dropdownHoverColor="dark" />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridItem  xs={8}>
            <div className={classes.contentCenter}>
                <h1 className={classes.title}>PORTFOLIO</h1>
                <div className={classes.cell}></div>            
                <div className={classes.wallet_group}>
                  <span className={classes.label_Address}>Wallet Address</span>
                  <input className={classes.address}/>
                </div>
                <div className={classes.token_group}>
                  <span className={classes.label_Id}>Token Id</span>
                  <input className={classes.token_Id}/>
                </div>
                <div className={classes.publish}>
                  <Button className={classes.publish_btn}>PUBLISH</Button>
                </div>

                <div className={classes.embed_cell}>
                  
                </div>
            </div>            
          </GridItem>
          <GridItem xs={2}>

          </GridItem>
        </div>
      </div>
      <Footer
        theme="dark"
        big
        content={
          <div>
           
          </div>
        }
      />
    </div>
  );
}
