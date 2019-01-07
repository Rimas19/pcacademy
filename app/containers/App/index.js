import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MainPage from '../../containers/MainPage';
import TestPage from '../../containers/TestPage';
import GlobalStyle from '../../global-styles';
import Dashboard from '../../containers/Dashboard';
import Customers from '../../containers/Customers';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/main/test/:name" component={TestPage} />
        <Route exact path="/main/dashboard" component={Dashboard} />
        <Route exact path="/main/dashboard/customers" component={Customers} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
