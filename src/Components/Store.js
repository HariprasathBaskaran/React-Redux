import { createStore } from "redux";
import { rootReducer } from "./RootReducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

export const store = createStore(rootReducer, applyMiddleware(logger));
