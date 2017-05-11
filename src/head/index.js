import React, { Component } from "react";
import "./style.styl";

export default class Header extends Component {
  render() {
    return (
      <div className="header-con">
        <div className="header-nav">
          BLOG
        </div>
        <svg width="100%" viewBox="0 0 800.8 251">
          <path
            fill="none"
            stroke="red"
            strokeWidth="5"
            d="M.39,125.5q200,250,400,0t400,0"
          />
        </svg>
      </div>
    );
  }
}
