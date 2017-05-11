import React, { Component } from "react";

class Programming extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        技术页面
        {this.props.children}
      </div>
    );
  }
}

export default Programming;
