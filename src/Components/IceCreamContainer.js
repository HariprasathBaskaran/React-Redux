import React, { Component } from "react";
import buyIceCream from "./IceCream/IceCreamAction";
import { connect } from "react-redux";

class IceCreamContainer extends Component {
  render() {
    return (
      <div>
        <h4>Number of IceCream-{this.props.numOfIceCream}</h4>
        <button onClick={this.props.buyIceCream}>Buy IceCream</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(IceCreamContainer);
