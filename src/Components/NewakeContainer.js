import React, { useCallback, useState } from "react";
import BuyCake from "./Cakes/CakeAction";
import { connect } from "react-redux";

function NewCakeContainer(props) {
  const [cakeQty, setCakeQty] = useState(1);
  return (
    <div>
      <h3>Number of Cakes-{props.numOfCakes}</h3>
      <input value={cakeQty} onChange={(e) => setCakeQty(e.target.value)} />
      <br />
      <button onClick={(cakeQty) => props.buyCake(cakeQty)}>
        Buy {cakeQty} cake
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (cakeQty) => dispatch(BuyCake(cakeQty)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
