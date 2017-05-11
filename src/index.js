import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRedirect } from "react-router";
import App from "./App";
import Login from "./login/index";
import Add from "./add/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "rdx/store";
import Directory from "./directory/index";
import Programming from "./programming/index";
import moduleDis from "./programming/moduleDis";

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="add" component={Add} />
        <Route path="directory" component={Directory} />
        <Route path="programming" component={Programming}>
          <Route path="module" component={moduleDis} />
        </Route>
        <IndexRedirect to="directory" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("container")
);
