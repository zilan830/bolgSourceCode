import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../nav/index";

export default class Directory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}
