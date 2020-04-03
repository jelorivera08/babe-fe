import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Login from "./containers/Login";
import Background from "./components/Background";
import Header from "./components/Header/index";

const DashBoardComponent = React.lazy(() => import("./containers/Dashboard"));

const ResllerDirectoryComponent = React.lazy(() =>
  import("./containers/ResllerDirectory")
);

const SignUpComponent = React.lazy(() => import("./containers/Signup"));

export let history = {};

function App() {
  history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Header history={history} />
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUpComponent />
      </Route>
      <Route path="/dashboard">
        <DashBoardComponent />
      </Route>
      <Route path="/aboutUs">
        <Background>
          <div
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
            className="text-3xl cursor-pointer"
          >
            More about us
          </div>
        </Background>
      </Route>
      <Route path="/resellers">
        <ResllerDirectoryComponent />
      </Route>
      <Route>
        <Background>
          <div
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
            onClick={() => history.push("/")}
            className="text-3xl cursor-pointer"
          >
            Hi, Babe. Are you lost? Click here to go back home.
          </div>
        </Background>
      </Route>
    </Switch>
  );
}

export default App;
