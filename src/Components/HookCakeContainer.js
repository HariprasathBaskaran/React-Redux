import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BuyCake from "./Cakes/CakeAction";

function HookCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Number of Cake-{numOfCakes}</p>
      <button onClick={() => dispatch(BuyCake())}>buy cake</button>
    </div>
  );
}

export default HookCakeContainer;
