import { combineReducers } from "redux";
import { CakeReducer } from "./Cakes/CakeReducer";
import { iceCreamReducer } from "./IceCream/IceCreamReducer";

export const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: iceCreamReducer,
});
