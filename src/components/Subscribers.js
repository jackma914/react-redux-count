import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux/subscribers/actions";

function Subscribers(props) {
  return (
    <div className="items">
      <p>구독자 수 : {props.count}</p>
      <button onClick={props.addSubscriber}>구독하기</button>
    </div>
  );
}

const mapStateToProps = (state) => {
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
