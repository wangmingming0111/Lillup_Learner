import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import clsx from 'clsx';

import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ImageList from '@mui/material/ImageList';

import Header_Lillup_LearnerExperience from "components/HeaderLillup/LearnerExperience/Header.js";
import HeaderLinks_Lillup_LearnerExperience from "components/HeaderLillup/LearnerExperience/HeaderLinks.js";
import Footer_Lillup_LearnerExperience from "components/FooterLillup/LearnerExperience/Footer.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import desktop14PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop14PageStyles.js";
import commonStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/commonStyles.js";
import buttonGroupStyle from "assets/jss/material-kit-pro-react/buttonGroupStyle.js";
import embedPanelStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/embedPanelStyle.js";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";
import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";

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
const useButtonGroupStyle = makeStyles(buttonGroupStyle);
const useEmbedPanelStyles = makeStyles(embedPanelStyle);
const useJavascriptStyles = makeStyles(javascriptStyles);
const useBasicStyles = makeStyles(basicsStyle);

import NFTTokenPanel from "views/LillupPage/LearnerExperiencePage/NFTTokenPanel.js";

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
import { Dialog, DialogContent, DialogTitle, DialogActions, Input } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import Instruction from "components/Instruction/Instruction.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function Desktop14Page({ ...rest }) {

  const [nftDatas, setNFTDatas] = useState({
    renderCount: 0,
    totalCount: 0,
    renderMetadatas: [],
    totalMetadatas: [],
    pageCount: 0,
    pageIndex: 0,
  });

  const [nftNotes, setNFTNotes] = useState("You don't have any NFT ampersand");
  const [selectedWalletAddress, setSelectedWalletAddress] = useState("");
  const [selectedTokenID, setSelectedTokenID] = useState("");
  const [embeddedPanel, setEmbeddedPanel] = React.useState(false);
  const [checkedA, setCheckedA] = React.useState(true);

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const formClasses = useFormStyles();

  const pageClasses = useDesktop14PageStyles();
  const commonClasses = useCommonStyles();
  const buttonGroupClasses = useButtonGroupStyle();
  const embedClasses = useEmbedPanelStyles();
  const javascriptStylesClasses = useJavascriptStyles();
  const basicStyleClasses = useBasicStyles();

  const { authenticate, isAuthenticated, logout, user, auth } = useMoralis();
  const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();

  const onAuthenticate = function () {
    if (isAuthenticated) {
      return;
    }
    console.log("----");
    authenticate({ 
      onComplete: onAuthenticateComplete, 
      signingMessage: "Hello, welcome on Lillup",
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
      // params: { chain: "0x1" },
      onSuccess: onGetNFTBalancesComplete,
    });
  };
  const onGetNFTBalancesComplete = function (nftBalances) {
    var index = 0;
    setNFTNotes("You don't have any NFT ampersand");

    /*
    + ------------------------------------------ +
    + get total metadatas
    + ------------------------------------------ +
    */
    var totalMetadatas = [];
    var totalCount = 0;
    for (index = 0; index < nftBalances.result.length; index++) {
      var nftMetadata = JSON.parse(nftBalances.result[index].metadata);
      if (nftMetadata == null) continue;
      if (nftMetadata.name == null ||
          nftMetadata.description == null ||
          nftMetadata.image == null) 
      {
        continue;
      }
      var _row = 1, _col = 1;
      switch (totalCount % 8)
      {
        case 0:
        case 5:
          _row = 2;
          _col = 2;
          break;
        case 3:
        case 4:
          _col = 2;
          break;
        default:
          break;
      }
      var _title = nftMetadata.name != null ? nftMetadata.name : "No title";
      var _description = nftMetadata.description != null ? nftMetadata.description : "No description";
      var _image = nftMetadata.image != null ? nftMetadata.image : "";
      var _walletAddress = nftBalances.result[index].owner_of ? nftBalances.result[index].owner_of : "";
      var _tokenId = nftBalances.result[index].token_id ? nftBalances.result[index].token_id : "";
      var metadata = {
        title: _title,
        desc: _description,
        image: _image,
        row: _row,
        col: _col,
        globalIndex: totalCount,
        walletAddress: _walletAddress,
        tokenId: _tokenId,
      };
      totalMetadatas.push(metadata);
      totalCount++;
    }

    /*
    + ------------------------------------------ +
    + get page count, index
    + ------------------------------------------ +
    */
    var pageCount = 0;
    var pageIndex = -1;
    if (totalCount > 0) {
      pageIndex = 0;
      pageCount = Math.floor(totalCount / 12);
      if (totalCount % 12 != 0) {
        pageCount++;
      }
    }

    /*
    + ------------------------------------------ +
    + get render metadatas
    + ------------------------------------------ +
    */
    var renderMetadatas = [];
    var renderCount = 0;
    if (pageCount > 0 && pageIndex >= 0) {
      var startIndex = pageIndex * 12;
      var endIndex = startIndex + 12;
      if (endIndex > totalCount) {
        endIndex = totalCount;
      }
      for (index = startIndex; index < endIndex; index++) {
        renderMetadatas.push(totalMetadatas[index]);
        renderCount++;
      }
    }

    /*
    + ------------------------------------------ +
    + update states
    + ------------------------------------------ +
    */
    setNFTDatas(previousState => {
      return { 
        ...previousState, 
        renderCount: renderCount,
        totalCount: totalCount,
        renderMetadatas: renderMetadatas,
        totalMetadatas: totalMetadatas,
        pageCount: pageCount,
        pageIndex: pageIndex,
      }
    });

    if (pageCount > 0 && pageIndex >= 0) {
      setNFTNotes("Page Info : [" + (pageIndex + 1) + "/" + pageCount + "]");
    }
    setSelectedWalletAddress("");
    setSelectedTokenID("");
  };

  const onNextPage = function () {
    if (nftDatas.pageCount < 1) {
      return;
    }
    if (nftDatas.pageIndex >= nftDatas.pageCount - 1) {
      return;
    }

    /*
    + ------------------------------------------ +
    + reset states
    + ------------------------------------------ +
    */
    setNFTDatas(previousState => {
      return { 
        ...previousState, 
        renderCount: 0,
        renderMetadatas: [],
      }
    });

    var pageIndex = nftDatas.pageIndex;
    pageIndex++;
    var index = 0;

    /*
    + ------------------------------------------ +
    + get render metadatas
    + ------------------------------------------ +
    */
    var renderMetadatas = [];
    var renderCount = 0;
    var startIndex = pageIndex * 12;
    var endIndex = startIndex + 12;
    if (endIndex > nftDatas.totalCount) {
      endIndex = nftDatas.totalCount;
    }
    for (index = startIndex; index < endIndex; index++) {
      renderMetadatas.push(nftDatas.totalMetadatas[index]);
      renderCount++;
    }

    /*
    + ------------------------------------------ +
    + update states
    + ------------------------------------------ +
    */
    setNFTDatas(previousState => {
      return { 
        ...previousState, 
        renderCount: renderCount,
        renderMetadatas: renderMetadatas,
        pageIndex: pageIndex,
      }
    });

    setNFTNotes("Page Info : [" + (pageIndex + 1) + "/" + nftDatas.pageCount + "]");
    setSelectedWalletAddress("");
    setSelectedTokenID("");
  };

  const onPrevPage = function () {
    if (nftDatas.pageCount < 1) {
      return;
    }
    if (nftDatas.pageIndex <= 0) {
      return;
    }

    /*
    + ------------------------------------------ +
    + reset states
    + ------------------------------------------ +
    */
    setNFTDatas(previousState => {
      return { 
        ...previousState, 
        renderCount: 0,
        renderMetadatas: [],
      }
    });

    var pageIndex = nftDatas.pageIndex;
    pageIndex--;
    var index = 0;
    
    /*
    + ------------------------------------------ +
    + get render metadatas
    + ------------------------------------------ +
    */
    var renderMetadatas = [];
    var renderCount = 0;
    var startIndex = pageIndex * 12;
    var endIndex = startIndex + 12;
    if (endIndex > nftDatas.totalCount) {
      endIndex = nftDatas.totalCount;
    }
    for (index = startIndex; index < endIndex; index++) {
      renderMetadatas.push(nftDatas.totalMetadatas[index]);
      renderCount++;
    }

    /*
    + ------------------------------------------ +
    + update states
    + ------------------------------------------ +
    */
    setNFTDatas(previousState => {
      return { 
        ...previousState, 
        renderCount: renderCount,
        renderMetadatas: renderMetadatas,
        pageIndex: pageIndex,
      }
    });

    setNFTNotes("Page Info : [" + (pageIndex + 1) + "/" + nftDatas.pageCount + "]");
    setSelectedWalletAddress("");
    setSelectedTokenID("");
  };

  const onNFTTokenSelected = function (index) {
    // console.log(index);
    if (nftDatas.pageCount < 1) {
      return;
    }
    if (index < 0 || index >= nftDatas.totalCount) {
      return;
    }
    
    document.getElementById("selected-wallet-address").value = nftDatas.totalMetadatas[index].walletAddress;
    document.getElementById("selected-token-id").value = nftDatas.totalMetadatas[index].tokenId;
  }

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
                <div className={buttonGroupClasses.buttonGroup}>
                  <Button
                    color="info"
                    size="sm"
                    round
                    className={buttonGroupClasses.firstButton}
                    onClick={onPrevPage}
                  >
                    <Remove />
                  </Button>
                  <Button
                    color="info"
                    size="sm"
                    round
                    className={buttonGroupClasses.lastButton}
                    onClick={onNextPage}
                  >
                    <Add />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;{nftNotes}</span>
                </div>
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
                  gap={0}
                  className={pageClasses.tokenCodeGrp_Img}
                >
                  {/* {itemData.map((item, index) => (
                    <NFTTokenPanel 
                      key={index} 
                      item={item} 
                      index={index}
                      img={item.img}
                      title={item.title}
                      description="SubTitle"
                      cols={item.cols || 1}
                      rows={item.rows || 1}
                      globalIndex=-1,
                      onSelected={onNFTTokenSelected}
                    />
                  ))} */}
                  {nftDatas.renderMetadatas.map((item, index) => (
                    <NFTTokenPanel 
                      key={index} 
                      index={index}
                      img={item.image}
                      title={item.title}
                      description={item.desc}
                      cols={item.col || 1}
                      rows={item.row || 1}
                      globalIndex={item.globalIndex}
                      onSelected={onNFTTokenSelected}
                    />
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
                    id="selected-wallet-address"
                    type={'text'}
                    startAdornment={<InputAdornment position="start"><img src={wallet_img} /></InputAdornment>}
                    value={selectedWalletAddress}
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
                    id="selected-token-id"
                    type={'text'}
                    startAdornment={<InputAdornment position="start"><img src={token_img} /></InputAdornment>}
                    value={selectedTokenID}
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
                <Button color="danger" className={pageClasses.embeddedBtn} onClick={() => setEmbeddedPanel(true)}>
                  EMBEDDED
                </Button>
                <Dialog
                  classes={{
                    root: javascriptStylesClasses.modalRoot,
                    paper: javascriptStylesClasses.modal + " " + embedClasses.dialog,
                  }}
                  open={embeddedPanel}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setEmbeddedPanel(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={javascriptStylesClasses.modalHeader}
                  >
                    <Button
                      simple
                      className={javascriptStylesClasses.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      onClick={() => setEmbeddedPanel(false)}
                    >
                      {" "}
                      <Close className={embedClasses.modalClose} />
                    </Button>
                    <span className={embedClasses.title}>Embed maps in your site</span>
                  </DialogTitle>
                  <DialogContent
                    className={embedClasses.modalBody}
                  >  
                    <span className={embedClasses.howToTitle}>Learn more about how to embed the logic{" "}
                      <a className={embedClasses.fontStyle}
                        href="https://www.creative-tim.com/?ref=mkpr-javascript-components"
                      >
                        here
                      </a>
                    </span>
                    <div>
                      <OutlinedInput
                        className={embedClasses.howToInput}
                        type={'text'}
                        endAdornment={<InputAdornment position="end">
                          <FormControlLabel
                            control={
                              <Switch
                                checked={checkedA}
                                onChange={(event) => setCheckedA(event.target.checked)}
                                value="checkedA"
                                classes={{
                                  switchBase: embedClasses.switchBase,
                                  checked: embedClasses.switchChecked,
                                  thumb: embedClasses.switchIcon,
                                  track: embedClasses.switchBar,
                                }}
                              />
                            }
                            classes={{
                              label: basicStyleClasses.label,
                              root: basicStyleClasses.labelRoot,
                            }}
                          />
                        </InputAdornment>}
                        value={checkedA ? "iFrame" : "Web component"}
                      />
                    </div>
                    <CustomInput
                      // labelText="You can write your text here..."
                      id="textarea-input-embedded"
                      formControlProps={{
                        fullWidth: true,
                        className: embedClasses.contentPanel,
                      }}
                      inputProps={{
                        multiline: true,                          
                        rows: 7,
                      }}
                      white
                    />
                  </DialogContent>
                  <DialogActions className={embedClasses.modalFooter}>
                    <div className={embedClasses.space}>
                      <Button link className={embedClasses.copyBtn}>Copy</Button>
                      <Button
                        onClick={() => setEmbeddedPanel(false)}
                        simple
                        className={embedClasses.dismissBtn}
                      >
                        Dismiss
                      </Button>
                    </div>
                  </DialogActions>
                </Dialog>
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
    // img: 'assets/img/lillup/experience/token_avatar.png',
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
