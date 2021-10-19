import React from "react";
import { connect } from "react-redux";

function Component(props) {
  console.log("props>", props);
  return (
    <div>
      <h1>Counter {props.counterp}</h1>
      <button onClick={props.increment}>increment</button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps>", state);
  return {
    counterp: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      console.log("increment");
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
