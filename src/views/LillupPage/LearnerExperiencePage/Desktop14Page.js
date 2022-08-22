/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import desktop14PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop14PageStyles.js";

import image from "assets/img/lillup-learner-experience-desktop-13.jpg";

const useStyles = makeStyles(desktop14PageStyle);

export default function Desktop14Page({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="dark" />}
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
        {/* <div className={classes.contentCenter}> */}
          <GridContainer justify="center">
            <GridItem md={12}>
              <h3 className={classes.title}>www.lillup.com Learner/Experience/Desktop-13</h3>
              <h2 className={classes.subTitle}>404 Page not found :(</h2>
              <h4 className={classes.description}>
                Ooooups! Looks like you got lost.
              </h4>
              {/* <Card>
                <form className={classes.form}>
                  <CardHeader
                      color="primary"
                      signup
                      className={classes.cardHeader}
                    >
                    <h1 className={classes.title}>404</h1>
                  </CardHeader>
                  <CardBody signup>
                    <h2 className={classes.subTitle}>Page not found :(</h2>
                    <h4 className={classes.description}>
                      Ooooups! Looks like you got lost.
                    </h4>
                  </CardBody>
                </form>
              </Card> */}
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
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
            </div>
          </div>
        }
      />
    </div>
  );
}
