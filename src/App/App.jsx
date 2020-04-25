import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Login from "./containers/Login";
import AboutUs from "./containers/AboutUs";
import Background from "./components/Background";
import Header from "./components/Header/index";

import jwtDecode from "jwt-decode";

import AppContext from "./context";

const DashBoardComponent = React.lazy(() => import("./containers/Dashboard"));

const ResllerDirectoryComponent = React.lazy(() =>
  import("./containers/ResllerDirectory")
);

const SignUpComponent = React.lazy(() => import("./containers/Signup"));

export let history = {};

function App() {
  const [username, setUsername] = useState("");
  const [region, setRegion] = useState("");

  history = useHistory();
  const token = window.localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      const tokenData = jwtDecode(token);

      setRegion(tokenData.region);
      setUsername(tokenData.username);
    }
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        username,
        region,
      }}
    >
      <Switch>
        <Route exact path='/'>
          <Header history={history} />
          <Login />
        </Route>
        <Route exact path='/signup'>
          <SignUpComponent />
        </Route>
        <Route path='/dashboard'>
          <DashBoardComponent />
        </Route>
        <Route path='/aboutUs'>
          <AboutUs />
        </Route>
        <Route path='/resellers'>
          <ResllerDirectoryComponent />
        </Route>
        <Route>
          <Background>
            <div
              onKeyDown={() => {}}
              role='button'
              tabIndex='0'
              onClick={() => history.push("/")}
              className='text-3xl cursor-pointer'
            >
              Hi, Babe. Are you lost? Click here to go back home.
            </div>
          </Background>
        </Route>
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
