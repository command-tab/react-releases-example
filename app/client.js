/*eslint-env browser*/
import "bootstrap";
import React from "react";
import Marty from "marty";
import {ApplicationContainer} from "marty";
import Application from "./Application";

// Can be removed with MartyJS 0.11 where parseJSON is being removed completely
// http://martyjs.org/guides/upgrading/09_10.html#parseJSON
Marty.HttpStateSource.removeHook("parseJSON");

let app = new Application();
app.rehydrate();
app.router.run(function (Handler, state) {
  React.render((
    <ApplicationContainer app={app}>
      <Handler {...state.params} />
    </ApplicationContainer>
  ), document.getElementById("app"));
});
