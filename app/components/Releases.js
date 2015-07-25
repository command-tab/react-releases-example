import React from "react";
import Marty from "marty";
import {PageHeader} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class Releases extends React.Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <PageHeader>React Releases</PageHeader>
			    <ListGroup>
			      {
			        this.props.releases.map((release) => {
			          return (
			            <ListGroupItem key={release.id}>
										<a href={release.html_url}>{release.tag_name}</a>
									</ListGroupItem>
			          );
			        })
			      }
			    </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default Marty.createContainer(Releases, {
  listenTo: ["ReleaseStore"],
  fetch: {
    releases() {
      return this.app.ReleaseStore.getAllReleases();
    }
  }
});
