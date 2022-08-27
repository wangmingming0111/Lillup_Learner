/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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

import { useMoralis, useNFTBalances } from "react-moralis";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size*cols}&h=${size*rows}&fit=crop&auto=format`,
    // srcSet: `${image}?w=${size*cols}&h=${size*rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Desktop14Page({ ...rest }) {

  const { authenticate, isAuthenticated, logout, user, auth } = useMoralis();
  const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();

  const onAuthenticate = function () {
    if (isAuthenticated) {
      return;
    }
    console.log("----");
    authenticate({ 
      onComplete: onAuthenticateComplete, 
      signingMessage: "Hello, welcome on Lillup" 
    });
  };
  const onAuthenticateComplete = function () {
  };
  const onLogout = function () {
    if (!isAuthenticated) {
      return;
    }
    logout();
  };
  const onGetNFTBalances = function () {
    if (!isAuthenticated) {
      return;
    }
    getNFTBalances({ 
      params: { chain: "0x1", address: "0xc2C1c4491a4ed8C3112e5207EF3bD7DA67c3c1ba" },
      onSuccess: (result) => console.log(result)
    });
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

  const onClickImageListItem = function () {
    console.log("1");
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Header_Lillup_LearnerExperience
        absolute
        // color="transparent"
        color="success"
        brand="www.lillup.com"
        links={<HeaderLinks_Lillup_LearnerExperience 
                  dropdownHoverColor="dark"
                  isAuthenticated={isAuthenticated}
                  onAuthenticateCallback={onAuthenticate}
                  onLogoutCallback={onLogout}
                  onGetNFTBalancesCallback={onGetNFTBalances}
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
                {/* <img 
                  src ={imageTokenCode} 
                  className={pageClasses.tokenCodeGrp_Img}
                /> */}
                <ImageList
                  sx={{
                    transform: 'translateZ(0)',
                  }}
                  variant="quilted"
                  cols={4}
                  rowHeight={120}
                  gap={1}
                  className={pageClasses.tokenCodeGrp_Img}
                >
                  {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                      <img
                        {...srcset(item.img, 120, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        sx={{
                          background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        title={item.title}
                        position="top"
                        actionIcon={
                          <IconButton
                            sx={{ color: 'white' }}
                            aria-label={`star ${item.title}`}
                          >
                            <StarBorderIcon />
                          </IconButton>
                        }
                        actionPosition="left"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>                
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
            </div>
          }
        />
      </div>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];
