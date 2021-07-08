import * as T from "./Types";

export const person: T.personType = {
  add: "ADD",
  delete: "DELETE",
};

export const addPerson: T.person = (IData) => {
  return { type: person.add, data: IData };
};

export const deletePerson: T.person = () => {
  return { type: person.delete };
};
