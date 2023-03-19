import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1}
    case "decrement":
      return {count: state.count - 1}
    default:
      return state;
  }
};

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <>
      <h3>UseReducerComponent</h3>
      <div>
        <button type="button" onClick={decrement}>-</button>
        <input type="text" value={state.count} />
        <button type="button" onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseReducerComponent;
