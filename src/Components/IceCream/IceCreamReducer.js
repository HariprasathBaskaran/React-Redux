import { iceCreamInitialState } from "../InitialState";
import { BUY_ICECREAM } from "./IceCreamAction";

export const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};
