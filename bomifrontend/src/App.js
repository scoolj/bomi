import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./hocs/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import listingDetail from "./pages/ListingDetail";
import NotFound from "./components/NotFound";

import { Provider } from "react-redux";
import store from "./store";

import "./sass/main.scss";
import "./assets/scss/style.scss"

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
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
