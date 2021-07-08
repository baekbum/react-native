import { exp } from "react-native-reanimated";
import { combineReducers, createStore } from "redux";
import personReducer from "./person/Reducer";
import type * as P from "./person/Types";

export type reducer = {
  personReducer: P.state;
};

const reducers = combineReducers({
  personReducer,
});

const store = createStore(reducers);

export default store;
