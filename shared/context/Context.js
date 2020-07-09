import React from "react";
const { createContext, useReducer } = require("react");
const { reducer } = require("./reducer");

let StoreContext = createContext({
  state: {},
  dispatch: () => {},
});

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
