import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../MainPage';
import GlobalStyle from '../../global-styles';
import Dashboard from '../Dashboard';
import Customers from '../../components/Customer';
import Layout from '../../components/Layout';
import Projects from '../../components/Project';
import Settings from '../../components/Setting';
import Invoice from '../../components/Invoice';
import Pagetest from '../../components/Pagetest';
export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/main" component={MainPage} />
        <Layout>
          <Route
            exact
            path="/dashboard"
            render={() => (
              <div>
                <Dashboard />
              </div>
            )}
          />
          <Route
            exact
            path="/customers"
            render={() => (
              <div>
                <Customers />
              </div>
            )}
          />
          <Route
            exact
            path="/projects"
            render={() => (
              <div>
                <Projects />
              </div>
            )}
          />
          <Route
            exact
            path="/invoices"
            render={() => (
              <div>
                <Invoice />
              </div>
            )}
          />
          <Route
            exact
            path="/settings"
            render={() => (
              <div>
                <Settings />
              </div>
            )}
          />
          <Route
            exact
            path="/testpage"
            render={() => (
              <div>
                <Pagetest />
              </div>
            )}
          />
        </Layout>
      </Switch>
      <GlobalStyle />
    </div>
  );
}
