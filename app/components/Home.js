import React from "react";
import {Link} from "react-router";
import {Row, Col} from "react-bootstrap";

export default class Home extends React.Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <p>Home</p>
					<Link to="/releases">Maybe check out /releases</Link>
        </Col>
      </Row>
    );
  }
}
