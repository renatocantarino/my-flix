import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Video from '././Pages/cadastro/video'
import Categoria from '././Pages/cadastro/categoria'
import Home from '././Pages/Home'

const main = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={Video} />
      <Route path="/cadastro/categoria" component={Categoria} />

      <Route component={Home} />
    </Switch>
  </BrowserRouter>,
  main
);





