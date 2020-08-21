import { useState } from "react";

export const useCounter = (initialState = 100) => {
  const [counter, setCounter] = useState(initialState);

  //con argumento
  const increment = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(initialState);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return {
    counter,
    increment,
    reset,
    decrement
  };
};
