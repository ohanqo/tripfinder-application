import { SET_CITIES } from "../constants/Types";

class Mutation {
  type;
  payload;
}

export const reducer = (state, mutation) => {
  switch (mutation.type) {
    case SET_CITIES:
      return { ...state, cities: mutation.payload };
    default:
      return state;
  }
};
