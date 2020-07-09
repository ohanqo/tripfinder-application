import { SET_CITIES, SET_USER } from "../constants/Types";

class Mutation {
  type;
  payload;
}

export const reducer = (state, mutation) => {
  switch (mutation.type) {
    case SET_CITIES:
      return { ...state, cities: mutation.payload };
    case SET_USER:
      return { ...state, user: mutation.payload };
    default:
      return state;
  }
};
