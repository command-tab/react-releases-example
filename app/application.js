import Marty from "marty";

import actions from "./actions";
import stores from "./stores";
import queries from "./queries";
import sources from "./sources";
import router from "./router";

export default class Application extends Marty.Application {
  constructor(options) {
    super(options);
    this.register(actions);
    this.register(stores);
    this.register(queries);
    this.register(sources);
    this.router = router;
  }
}
