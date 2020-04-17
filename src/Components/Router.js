import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Collection from "Routes/Collection";
import Home from "Routes/Home";
import Tv from "Routes/TV";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={Tv} />
        <Route path="/search" exact component={Search} />
        <Route path="/collection/:id" excact component={Collection} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/show/:id" exact component={Detail} />
        <Route path="/movie/:id/:name" exact component={Detail} />
        <Route path="/show/:id/:name" exact component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
