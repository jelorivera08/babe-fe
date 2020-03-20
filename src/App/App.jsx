import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './containers/Login';
import DashBoard from './containers/Dashboard';
import SignUp from './containers/Signup';


function App() {
  return (
    <Router>
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
      </Switch>

    </Router>
  );
}

export default App;
