import React from 'react';
import {
  Switch,
  Route, useHistory,
} from 'react-router-dom';

import Login from './containers/Login';
import DashBoard from './containers/Dashboard';
import SignUp from './containers/Signup';
import Background from './components/Background';


function App() {
  const history = useHistory();

  return (

    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route path="/dashboard">
        <DashBoard />
      </Route>
      <Route>
        <Background>
          <div
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
            onClick={() => history.push('/')}
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
