import React from "react";
import { connect } from "react-redux";
import { addView } from "../redux/";

function Views({ count, addView }) {
  return (
    <div className="items">
      <p>조회수 : {count}</p>
      <button
        onClick={() => {
          addView();
        }}
      >
        조회하기
      </button>
    </div>
  );
}

const mapStateToProps = ({ views }) => {
  return {
    count: views.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addView: () => {
      dispatch(addView());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
