import { useState } from "react";
import BuyCake from "./Cakes/CakeAction";
import { connect } from "react-redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  console.log("function", number);
  return (
    <div>
      <h3>Number of Cakes-{props.numOfCakes}</h3>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <br />
      <button onClick={() => props.buyCake(number)}>Buy{number} cake</button>
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
    buyCake: (number) => dispatch(BuyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
