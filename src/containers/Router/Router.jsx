import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Lists from '../Lists/Lists';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

import styles from './Router.module.css';

const Router = () => {

  return (
    <div className={ styles.container }>
      <Header />
      <Switch>
        <Route path="/reg">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Lists />
        </Route>
      </Switch>
    </div>
  );
};

export default Router;