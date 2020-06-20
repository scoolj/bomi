import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Listings from "./containers/Listings";

import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Layout from "./hocs/Layout";
import listingDetail from "./containers/ListingDetail";
import NotFounud from "./components/NotFound";

import {Provider} from 'react-redux'
import  store from './store'

import "./sass/main.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/listngs/:id" component={listingDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NotFounud} />
        </Switch>
      </Layout>
    </Router>
    </Provider>
  );
};

export default App;
