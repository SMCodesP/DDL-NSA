import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/';
import Dashboard from './pages/Dashboard/';
import Downloads from './pages/Downloads';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/downloads" component={Downloads} />
      </Switch>
    </Router>
  );
}
