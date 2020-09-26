import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import './App.scss';
import HomePage from './components/HomePage/HomePage';
import KitsPage from './components/Products/KitsPage/KitsPage';
import NotFound from './components/ErrorPages/NotFoundPage';

const App = props => {
  const { match, location, history } = props;
  useEffect(() => {
    scrollTop();
  },[location]);

  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

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

const AppWithRouter = withRouter(App);
export default AppWithRouter;