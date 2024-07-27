import React, { Component } from "react";
import BuyCake from "./Cakes/CakeAction";
import { connect } from "react-redux";

class CakeContainer extends Component {
  render() {
    return (
      <div>
        <h4>Number of Cakes-{this.props.numOfCakes}</h4>
        <button onClick={this.props.buyCake}>Buy Cake</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(BuyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
