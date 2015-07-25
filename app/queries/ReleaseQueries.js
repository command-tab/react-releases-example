import Marty from "marty";
import ReleaseConstants from "../constants/ReleaseConstants";

export default class ReleaseQueries extends Marty.Queries {
  getAllReleases() {
    return this.app.ReleaseSource.getAllReleases().then(releases => {
      return this.dispatch(ReleaseConstants.RECEIVE_RELEASES, releases);
    });
  }
	// Other methods here ...
}
