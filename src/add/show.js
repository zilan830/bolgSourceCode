import React from "react";
import { connect } from "react-redux";

const Span = ({ id, children }) => {
  return <span>数字{children}{id}</span>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    id: state.todo.id
  };
};

const ShowSpan = connect(mapStateToProps)(Span);

export default ShowSpan;
