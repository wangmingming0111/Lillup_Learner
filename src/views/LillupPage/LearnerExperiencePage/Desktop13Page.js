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
          <GridContainer justify="center">
        {/* <div className={classes.contentCenter}>
          <GridContainer> */}
            <GridItem xs={12} sm={12} md={12}>
              <h4 className={classes.title}>www.lillup.com Learner-Experience Page</h4>
              <h4 className={classes.description}>
                Ooooups! Looks like you got lost.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <Card>
                {/* <form className={classes.form}> */}
                  <CardHeader
                      // image
                      color="primary"
                      // signup
                      className={classes.cardHeader}
                    >
                    <h1 className={classes.title}>404</h1>
                  </CardHeader>

                  {/* <CardHeader image>
                    <a href="#pablo">
                      <img src={cardProduct1} alt="cardProduct" />
                    </a>
                  </CardHeader> */}

                  <CardBody signup>
                    <h2 className={classes.subTitle}>Page not found :(</h2>
                    <h4 className={classes.description}>
                      Ooooups! Looks like you got lost.
                    </h4>
                  </CardBody>
                {/* </form> */}
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.subTitle}>404 Page not found : 1</h2>
              <h2 className={classes.subTitle}>404 Page not found : 2</h2>
              <h2 className={classes.subTitle}>404 Page not found : 3</h2>
              <h2 className={classes.subTitle}>404 Page not found : 4</h2>
              <h2 className={classes.subTitle}>404 Page not found : 5</h2>
              <h2 className={classes.subTitle}>404 Page not found : 6</h2>
              <h2 className={classes.subTitle}>404 Page not found : 7</h2>
              <h2 className={classes.subTitle}>404 Page not found : 8</h2>
              <h2 className={classes.subTitle}>404 Page not found : 9</h2>
              <h2 className={classes.subTitle}>404 Page not found : 10</h2>
              <h2 className={classes.subTitle}>404 Page not found : 11</h2>
              <h2 className={classes.subTitle}>404 Page not found : 12</h2>
              <h2 className={classes.subTitle}>404 Page not found : 13</h2>
              <h2 className={classes.subTitle}>404 Page not found : 14</h2>
              <h2 className={classes.subTitle}>404 Page not found : 15</h2>
              <h2 className={classes.subTitle}>404 Page not found : 16</h2>
              <h2 className={classes.subTitle}>404 Page not found : 17</h2>
              <h2 className={classes.subTitle}>404 Page not found : 18</h2>
              <h2 className={classes.subTitle}>404 Page not found : 19</h2>
              <h2 className={classes.subTitle}>404 Page not found : 20</h2>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
      <Footer
        theme="dark"
        big
        content={
          <div>
            {/* <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-error"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation/?ref=mkpr-error"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license/?ref=mkpr-error"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com/?ref=mkpr-error"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div> */}
          </div>
        }
      />
    </div>
  );
}
