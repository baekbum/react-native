import { Action } from "redux";
import { IPerson } from "../../components/person/IPerson";
import * as A from "./Action";
import * as T from "./Types";

const initializeState: T.state = [];

const personReducer = (state: T.state = initializeState, action: T.action) => {
  switch (action.type) {
    case A.person.add:
      return [...state, action.data];
    case A.person.delete:
      return initializeState;
    default:
      return state;
  }
};

export default personReducer;
