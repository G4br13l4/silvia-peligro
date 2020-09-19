import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.scss';
import HomePage from './components/HomePage/HomePage';
import KitsPage from './components/Products/KitsPage/KitsPage';
import NotFound from './components/ErrorPages/NotFoundPage';

function App() {
  return (
    <div className="content-wrap">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products/kits" component={KitsPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
      
  );
}

export default App;
