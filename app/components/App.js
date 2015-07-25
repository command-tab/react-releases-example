import React from "react";
import Intl from "intl";
import {RouteHandler} from "react-router";
import {Grid} from "react-bootstrap";
import Navigation from "./Navigation";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Grid>
          <RouteHandler/>
        </Grid>
      </div>
    );
  }
}
