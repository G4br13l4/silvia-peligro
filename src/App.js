import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import './App.scss';
import HomePage from './components/HomePage/HomePage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import KitsPage from './components/ProductsPage/Kits/KitsPage';
import ClassesPage from './components/ClassesPage/ClassesPage';
import EventsPage from './components/EventsPage/EventsPage';
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
        {/* <Redirect from="/silvia-peligro" to="/" /> */}
        <Route path="/silvia-peligro" component={HomePage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/products/kits" component={KitsPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/classes" component={ClassesPage} />
        <Route path="/events" component={EventsPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
      
  );
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;