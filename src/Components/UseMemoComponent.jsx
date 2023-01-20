import React, { useMemo, useState } from "react";

const UseMemoComponent = () => {
  const [count, setCount] = useState(10);
  const [arr, setArr] = useState([1, 2, 3, 5]);

  // use memo only for Pure Function
  function showMaxValue() {
    console.log("changing max");
    return Math.max(...arr);
  }

  const memArr = useMemo(() => {
    return showMaxValue();
  }, [arr]);

  return (
    <>
      <p>Memo Count: {count}</p>
      {JSON.stringify(arr)}
      <p>Array max value: {memArr}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        {" "}
        Change Memo Count
      </button>
      <button
        type="button"
        onClick={() => setArr([...arr, Math.round(count * Math.random())])}
      >
        {" "}
        Change Memo Array
      </button>
    </>
  );
};

export default UseMemoComponent;
