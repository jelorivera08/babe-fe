import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './containers/Login';
import DashBoard from './containers/Dashboard';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const isAuth = window.localStorage.getItem('isAuthenticated');

    if (isAuth) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        {isAuthenticated && (
          <Route exact path="/dashboard">
            <DashBoard />
          </Route>
        )}
      </Switch>

    </Router>
  );
}

export default App;
