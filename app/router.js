import Router from "react-router";
import routes from "./routes";

let location = () => {
  if (typeof window !== "undefined") {
    return Router.HistoryLocation;
  }
};

export default Router.create({
  routes: routes,
  location: location()
});
