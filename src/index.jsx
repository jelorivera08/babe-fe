import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";
import environment from "./environment";
import Background from "./App/components/Background";

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <Router>
      <Suspense fallback={<Background>loading...</Background>}>
        <App />
      </Suspense>
    </Router>
  </RelayEnvironmentProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
