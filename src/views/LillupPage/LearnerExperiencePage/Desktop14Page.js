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

import Header_Lillup_LearnerExperience from "components/HeaderLillup/LearnerExperience/Header.js";
import HeaderLinks_Lillup_LearnerExperience from "components/HeaderLillup/LearnerExperience/HeaderLinks.js";
import Footer_Lillup_LearnerExperience from "components/FooterLillup/LearnerExperience/Footer.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

// import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import desktop14PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop14PageStyles.js";
import commonStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/commonStyles.js";

import imageBack from "assets/img/lillup-learner-experience-desktop-13.png";
import imageMarkCopy from "assets/img/lillup/experience/Mark_Copy.png";
import imageMarkFacebook from "assets/img/lillup/experience/Mark_Facebook.png";
import imageMarkInstagram from "assets/img/lillup/experience/Mark_Instagram.png";
import imageMarkLinkedIn from "assets/img/lillup/experience/Mark_LinkedIn.png";
import imageMarkMail from "assets/img/lillup/experience/Mark_Mail.png";
import imageMarkTelegram from "assets/img/lillup/experience/Mark_Telegram.png";
import imageMarkTwitter from "assets/img/lillup/experience/Mark_Twitter.png";
import imageMarkWhatapp from "assets/img/lillup/experience/Mark_Whatapp.png";
import imageQRCode from "assets/img/lillup/experience/QRCode_Sample.png";
import imageTokenCode from "assets/img/lillup/experience/TokenCode_Sample.png";

import wallet_img from "assets/img/lillup/experience/wallet_avatar.png";
import token_img from "assets/img/lillup/experience/token_avatar.png";

const useDesktop14PageStyles = makeStyles(desktop14PageStyle);
const useCommonStyles = makeStyles(commonStyle);

const useFormStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(0),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
    height: "55px",
  },
  borderProp: {
    background: '#FFFFFF',
    // border: '1px solid #D1D1D1',
    // borderRadius: '10px',
    borderRadius: '0.5vw',
  }
}));

import { useMoralis } from "react-moralis";

export default function Desktop14Page({ ...rest }) {

  const { authenticate, isAuthenticated, logout } = useMoralis();

  const onAuthenticate = function () {
    console.log("+ -------------- +");
    console.log("onAuthenticate");
    authenticate({ signingMessage: "Hello, welcome on Lillup" })
  };
  const onSignout = function () {
    console.log("+ -------------- +");
    console.log("onSignout");
    logout();
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const formClasses = useFormStyles();

  const pageClasses = useDesktop14PageStyles();
  const commonClasses = useCommonStyles();

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Header_Lillup_LearnerExperience
        absolute
        // color="transparent"
        color="success"
        brand="www.lillup.com"
        links={<HeaderLinks_Lillup_LearnerExperience 
                  dropdownHoverColor="dark"
                  isAuthenticated={isAuthenticated}
                  onAuthenticateCallback={onAuthenticate}
                  onSignoutCallback={onSignout}
                />}
        {...rest}
      />
      <div
        className={pageClasses.pageHeader}
        style={{
          backgroundImage: "url(" + imageBack + ")",
          // backgroundColor: "white",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={pageClasses.container + " " + commonClasses.pageContent}>
          <GridContainer direction="row">
            <GridItem 
              lg={2} xl={3}
            >
            </GridItem>
            <GridItem
              xs={12} sm={7} md={7} lg={5} xl={4}
              className={pageClasses.leftPanel}
            >
              <div className={pageClasses.portfolioTitleGrp}>
                <h1 className={pageClasses.portfolioTitle}>NET TOKEN</h1>
              </div>
              <div className={pageClasses.tokenCodeGrp}>
                <img 
                  src ={imageTokenCode} 
                  className={pageClasses.tokenCodeGrp_Img}
                />
              </div>

              <div className={pageClasses.walletGroup}>
                <span className={pageClasses.walletGroup_Label}>
                  Wallet Address
                </span>
                <FormControl 
                  className={clsx(formClasses.margin, formClasses.textField, formClasses.borderProp)} 
                  variant="outlined">
                  <OutlinedInput
                    className={pageClasses.walletGroup_Input}
                    id="outlined-adornment-wallet"
                    type={'text'}
                    startAdornment={<InputAdornment position="start"><img src={wallet_img} /></InputAdornment>}
                  />
                </FormControl>
              </div>

              <div className={pageClasses.tokenGroup}>
                <span className={pageClasses.tokenGroup_Label}>
                  Token Id
                </span>
                <FormControl className={clsx(formClasses.margin, formClasses.textField, formClasses.borderProp)} variant="outlined">
                  <OutlinedInput
                    className={pageClasses.tokenGroup_Input}
                    id="outlined-adornment-token"
                    type={'text'}
                    startAdornment={<InputAdornment position="start"><img src={token_img} /></InputAdornment>}
                  />
                </FormControl>
              </div>

              <div className={pageClasses.publishGrp}>
                <Button color="danger" className={pageClasses.publishBtn}>
                PUBLISH
                </Button>
              </div>

            </GridItem>
            <GridItem
              xs={12} sm={5} md={5} lg={4} xl={3}
              className={pageClasses.rightPanel}
            >
              <h1 className={pageClasses.socialNetworkTitle}>Share</h1>
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
              <div className={pageClasses.qrCodeGroup}>
                <img
                  src={imageQRCode}
                  alt="..."
                  className={pageClasses.qrCodeGroup_Img}
                  // className={classes.imgRounded + " " + classes.imgFluid}
                />
              </div>
              <div className={pageClasses.embeddedGroup}>
                <Button color="danger" className={pageClasses.embeddedBtn}>
                  EMBEDDED
                </Button>
              </div>
            </GridItem>
            <GridItem 
              lg={1} xl={2}
            >
            </GridItem>
          </GridContainer>
        </div>
        <Footer_Lillup_LearnerExperience
          className={pageClasses.footer}
          theme="dark"
          // big
          content={
            <div>
              {/* <div className={pageClasses.left}>
                <GridContainer>
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
              </div> */}
              {/* <div className={pageClasses.left}>
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
              </div> */}
            </div>
          }
        />
      </div>
    </div>
  );
}
