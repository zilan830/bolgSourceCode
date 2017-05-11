import React, { Component } from "react";
import "./style.styl";
import { addTodo, setNextTotal } from "rdx/actions/index";
import { connect } from "react-redux";
import ShowSpan from "./show";

// export default class Add extends Component {
//   constructor(props) {
//     super(props);
//
//   }
//
//   render() {
//     return (
//       <div className="add-con">
//         <div className="show"><span>显示</span></div>
//         <div className="btn">
//           <button>按钮</button>
//         </div>
//       </div>
//     )
//   }
// }

let Add = ({ dispatch }) => {
  return (
    <div className="add-con">
      <div className="show">
        <span>显示</span>
        <ShowSpan>
          <p>ces</p>
        </ShowSpan>
      </div>
      <div className="btn">
        <button
          onClick={e => {
            console.log("hhhh");
            dispatch(addTodo("加一"));
            dispatch(setNextTotal());
          }}
        >
          按钮
        </button>
      </div>
    </div>
  );
};

Add = connect()(Add);

export default Add;
