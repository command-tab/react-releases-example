import _ from "lodash";
import Marty from "marty";
import ReleaseConstants from "../constants/ReleaseConstants";

export default class ReleaseStore extends Marty.Store {
  constructor(options) {
    super(options);
    this.state = {};
    this.handlers = {
      addReleases: ReleaseConstants.RECEIVE_RELEASES
    };
  }
  getAllReleases() {
    return this.fetch({
      id: "all-releases",
      locally() {
        if (this.hasAlreadyFetched("all-releases")) {
          return _.values(this.state);
        }
      },
      remotely() {
        return this.app.ReleaseQueries.getAllReleases();
      }
    });
  }
  addRelease(release) {
    this.addReleases([release]);
  }
  addReleases(releases) {
    if (!_.isArray(releases)) {
      releases = [releases];
    }
    _.each(releases, (release) => {
      this.state[release.id] = release;
    });
    this.hasChanged();
  }
}
