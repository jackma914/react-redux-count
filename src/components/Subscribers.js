import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux/";

function Subscribers({ count, addSubscriber }) {
  return (
    <div className="items">
      <p>구독자 수 : {count}</p>
      <button
        onClick={() => {
          addSubscriber();
        }}
      >
        구독하기
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSubscriber: () => {
      dispatch(addSubscriber());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
