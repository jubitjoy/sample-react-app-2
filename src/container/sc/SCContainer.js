//import React from "react";
import { connect } from "react-redux";
import { addSC, removeSC } from "../../actions/sc/scActions";
import SCContainer from "../../components/sc/SC";

const mapStateToProps = ({ scData }) => {
  return {
    list: scData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addSC: data => {
      return dispatch(addSC(data));
    },
    removeSC: data => {
      return dispatch(removeSC(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SCContainer);
