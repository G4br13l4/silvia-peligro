import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.scss';
import HomePage from './components/home/HomePage';
import KitsPage from './components/products/kits/KitsPage';

function App() {
  return (
    <div className="content-wrap">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products/kits" component={KitsPage} />
        {/* <Route path='/default' render={() => <Redirect to= "/" />} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
      
  );
}

export default App;
