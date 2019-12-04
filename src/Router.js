import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeLayout from './components/home/home-layout';
import 'antd/dist/antd.css';

const Router = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/" component={HomeLayout} />
  

    </Switch>
  </BrowserRouter>
);

export default Router;