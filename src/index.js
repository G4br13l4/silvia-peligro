import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Embroidery.ttf';
import './fonts/Spot-Matrix.ttf';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Suspense fallback="loading">
    <ReduxProvider store={store}>
          <App />
    </ReduxProvider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
