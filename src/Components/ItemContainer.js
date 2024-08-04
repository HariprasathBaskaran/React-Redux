import React from "react";
import { connect } from "react-redux";
import BuyCake from "./Cakes/CakeAction";
import buyIceCream from "./IceCream/IceCreamAction";

function ItemContainer(props) {
  return (
    <div>
      <p>Item-{props.item}</p>
      <button onClick={props.buyItem}>buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake
    ? () => dispatch(BuyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: itemDispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
