import { cakeInitialState } from "../InitialState";
import { BUY_CAKE } from "./CakeAction";

export const CakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};
