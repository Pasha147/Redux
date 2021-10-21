import React from "react";
import { connect } from "react-redux";
import { incrCounter, multiplyCounter } from "./actions";

function Component(props) {
  // console.log("state>", state);
  return (
    <div>
      <h1>Counter {props.counterp}</h1>
      <button onClick={props.increment}>increment</button>
      <button
        onClick={() => {
          return props.multiply(8);
        }}
      >
        Multiply
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  const { compReducer } = state;
  return {
    counterp: compReducer.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      return dispatch(incrCounter());
    },
    multiply: (n) => {
      return dispatch(multiplyCounter(n));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
