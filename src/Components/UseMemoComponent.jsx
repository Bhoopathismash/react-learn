import React, { useState, useMemo } from "react";

const UseMemoComponent = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  const calculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const largeCalculation = useMemo(() => calculation(count), [count]);

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        Count: {count} <br />
        <button onClick={increment}>+</button>
        <h2>Large Calculation</h2>
        {largeCalculation}
      </div>
    </div>
  );
};

export default UseMemoComponent;
