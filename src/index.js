import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch, Router, Route } from "react-router-dom";
import { history } from './utils/history';
import { Provider as ReduxProvider } from 'react-redux';


import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';
import './i18n';

import MainContainer from './components/MainContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Embroidery.ttf';
import './fonts/Spot-Matrix.ttf';
import './index.css';



const store = configureStore();

ReactDOM.render(
  <Suspense fallback="loading">
      <BrowserRouter>
        <ReduxProvider store={store}>
          <Router history={history}>
            <Switch>
              <Route path="/" component={MainContainer}/>
            </Switch>
          </Router>
        </ReduxProvider>
      </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
