import { React, StrictMode } from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";

import App from "./App";

const APP_ID = "Ra5TzI8AtWDIYG7k88juzx3zhEr6YZ8ghVUx8F34";
const SERVER_URL = "https://yi52hrws3oqw.usemoralis.com:2053/server";

ReactDOM.render(
  <StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <App />
    </MoralisProvider>
  </StrictMode>,
  document.getElementById("root")
);
