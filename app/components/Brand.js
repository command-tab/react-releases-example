import React from "react";
import {Link} from "react-router";

export default class Brand extends React.Component {
  render() {
    return (
      <Link to="/" className="navbar-brand">React Releases</Link>
    );
  }
}
