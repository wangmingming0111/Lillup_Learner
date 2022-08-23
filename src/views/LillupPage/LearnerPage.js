/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import learnerStyle from "../../assets/jss/material-kit-pro-react/views/lillup/experience/learnerStyle.js";

import image from "assets/img/clint-mckoy.jpg";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(learnerStyle);


export default function LearnerPage() {

  const classes = useStyles();

  return (
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
  );

}
