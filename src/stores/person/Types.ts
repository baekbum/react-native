import { Action } from "redux";
import { IPerson } from "../../components/person/IPerson";

export type personType = {
  add: string;
  delete: string;
};

export type person = {
  (IData?: IPerson): {
    type: string;
    data?: IPerson;
  };
};

export type addPerson = Action<"ADD"> & {
  data: IPerson[];
};

export type deletePerson = Action<"DELETE"> & {
  data?: null;
};

export type state = IPerson[];

export type action = addPerson | deletePerson;
