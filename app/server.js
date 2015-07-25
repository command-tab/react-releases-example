/*eslint-env node*/
import path from "path";
import express from "express";
import proxy from "proxy-middleware";
import url from "url";
import Marty from "marty";
import routes from "./routes";
import Application from "./Application";

// Can be removed with MartyJS 0.11 where parseJSON is being removed completely
// http://martyjs.org/guides/upgrading/09_10.html#parseJSON
Marty.HttpStateSource.removeHook("parseJSON");

let server = express();

// Serve static content from static/ directory
server.use("/static", express.static(path.join(__dirname, "static")));

// Render Jade template
server.set("view engine", "jade");
server.set("views", path.join(__dirname, "templates"));

// Proxy /build to webpack-dev-server if in development mode,
// where webpack will be serving content from memory on port 8080.
// Production will serve the pre-built JS file on disk from /build.
if (process.env.NODE_ENV === "development") {
  server.use("/build", proxy(url.parse("http://127.0.0.1:8080/build")));
} else {
  server.use("/build", express.static("./build"));
}

server.use(require("marty-express")({
  routes: routes, // required
  application: Application, // required
  body: "body", // name of local body variable in view, default: body
  state: "state" // name of local state variable in view, default: state
}));

let port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Listening at http://127.0.0.1:" + port);
});
