import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import clsx from 'clsx';

import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import Header_Lillup_LearnerExperience from "components/HeaderLillup/LearnerExperience/Header.js";
import HeaderLinks_Lillup_LearnerExperience from "components/HeaderLillup/LearnerExperience/HeaderLinks.js";
import Footer_Lillup_LearnerExperience from "components/FooterLillup/LearnerExperience/Footer.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import desktop14PageStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/desktop14PageStyles.js";
import commonStyle from "assets/jss/material-kit-pro-react/views/lillup/experience/commonStyles.js";
import buttonGroupStyle from "assets/jss/material-kit-pro-react/buttonGroupStyle.js";

import imageBack from "assets/img/lillup-learner-experience-desktop-13.png";
import imageQRCode from "assets/img/lillup/experience/QRCode_Sample.png";

import wallet_img from "assets/img/lillup/experience/wallet_avatar.png";
import token_img from "assets/img/lillup/experience/token_avatar.png";

const useDesktop14PageStyles = makeStyles(desktop14PageStyle);
const useCommonStyles = makeStyles(commonStyle);
const useButtonGroupStyle = makeStyles(buttonGroupStyle);

import NFTTokenList from "views/LillupPage/LearnerExperiencePage/NFTTokenList.js";
import SocialMediaList from "views/LillupPage/LearnerExperiencePage/SocialMediaList.js";
import EmbeddedGroup from "views/LillupPage/LearnerExperiencePage/EmbeddedGroup.js";

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

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const formClasses = useFormStyles();

  const pageClasses = useDesktop14PageStyles();
  const commonClasses = useCommonStyles();

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
    // document.getElementById("nft-token-list-wrapper").style.display = "none";
    if (!isAuthenticated) {
      return;
    }
    logout();
  };
  const onGetNFTBalances = function () {
    // document.getElementById("nft-token-list-wrapper").style.display = "block";
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
              
              <NFTTokenList 
                id="nft-token-list-wrapper"
                metadatas={nftDatas.renderMetadatas}
                nftNotes={nftNotes}
                onPrevPage={onPrevPage}
                onNextPage={onNextPage}
                onNFTTokenSelected={onNFTTokenSelected}
                style={{display: 'none'}}
              />

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
              <SocialMediaList />
              <div className={pageClasses.qrCodeGroup}>
                <img
                  src={imageQRCode}
                  alt="..."
                  className={pageClasses.qrCodeGroup_Img}
                  // className={classes.imgRounded + " " + classes.imgFluid}
                />
              </div>
              <EmbeddedGroup />
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
};
