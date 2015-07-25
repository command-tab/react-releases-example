import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {NavItemLink} from "react-router-bootstrap";
import Brand from "./Brand";

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar staticTop brand={<Brand/>} toggleNavKey={0}>
        <Nav navbar>
          <NavItemLink eventKey={1} to="/releases">Releases</NavItemLink>
        </Nav>
      </Navbar>
    );
  }
}
