import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { setNextTotal } from "rdx/actions/index";

import "./style.styl";

const oriData = [
  {
    title: "技术类",
    summary: "呵呵哒",
    items: [
      {
        title: "redux",
        summary: "哼哼哒",
        link: "programming/module"
      },
      {
        title: "stylus",
        summary: "哈哈哒"
      }
    ]
  },
  {
    title: "生活类",
    summary: "吼吼哒",
    items: [
      {
        title: "教做饭的",
        summary: "嘿嘿哒"
      },
      {
        title: "教常识的",
        summary: "嘻嘻哒"
      }
    ]
  }
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: oriData,
      returnData: oriData
    };
  }

  componentWillReceiveProps(nextProps) {
    const originData = [...this.state.total];
    if (nextProps.total !== this.props.total) {
      this.setState({
        total: nextProps.total,
        returnData: originData
      });
    }
  }

  render() {
    const total = [...this.state.total];
    const DirContent = total.map((item, index) => {
      const num = Math.random().toString().substr(-1);
      return (
        <div
          key={index}
          className="nav-in-con"
          onClick={e => {
            e.preventDefault();
            item.hasOwnProperty("items")
              ? this.props.onClick(item.items)
              : console.log("none");
          }}
        >
          <Link to={item.hasOwnProperty("link") ? `${item.link}` : ""}>
            <p
              className="nav-title"
              style={num % 2 === 0 ? { float: "left" } : { float: "right" }}
            >
              {item.title}
            </p>
            <p className="nav-profile">{item.summary}</p>
          </Link>
        </div>
      );
    });
    return (
      <div className="nav-container">
        <button
          className="return-btn"
          onClick={e => {
            e.preventDefault();
            this.props.onClick(this.state.returnData);
          }}
        >
          返回
        </button>
        {DirContent}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    total: state.nextNav.total
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: total => {
    dispatch(setNextTotal(total));
  }
});

const ShowNav = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default ShowNav;
