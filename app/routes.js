import React from "react"; // eslint-disable-line no-unused-vars
import {Route} from "react-router";
import {DefaultRoute} from "react-router";

import App from "./components/App";
import Releases from "./components/Releases";
import Home from "./components/Home";

export default (
  <Route name="app" path="/" handler={App}>
    <Route name="releases" path="/releases/?" handler={Releases}/>
    <DefaultRoute name="home" handler={Home}/>
  </Route>
);
