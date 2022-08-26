import { React, StrictMode } from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";

import App from "./App";

/*
Getting method of appId and serverURL.
These is information for Moralis Dashboard.
go => https://admin.moralis.io/
click => dapps
click => 'Add new Dapp'
After added new Dapp, click => setting
You can show app ID and server URL
*/
// const APP_ID = "Ra5TzI8AtWDIYG7k88juzx3zhEr6YZ8ghVUx8F34";
// const SERVER_URL = "https://yi52hrws3oqw.usemoralis.com:2053/server";
const APP_ID = "VDocYS2PEJtiX9qok50AoosDKHcto64dZe46Oeif";
const SERVER_URL = "https://nvwyb9p0qf2l.usemoralis.com:2053/server";
// this value is example in codesandbox
// serverUrl="https://hpz4yq50hr8y.usemoralis.com:2053/server"
// appId="FaLY0U96izeaTHPkmvxHUq87YIejSYU0KMBiHS5M"

ReactDOM.render(
  // <StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <App />
    </MoralisProvider>,
  // </StrictMode>,
  document.getElementById("root")
);
