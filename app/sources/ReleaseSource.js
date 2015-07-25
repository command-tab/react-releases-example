import Marty from "marty";

export default class ReleaseSource extends Marty.HttpStateSource {
  getAllReleases() {
    return this.get("/static/releases.json").then((response) => {
      if (!response.ok) {
        throw response.statusText;
      }
      return response.json();
    });
  }
	
	// getRelease ...
}
