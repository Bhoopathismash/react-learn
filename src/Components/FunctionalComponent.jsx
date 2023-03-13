import React from "react";
import { useEffect, useState } from "react";
const initValue = { name: "bhoo", age: "10" };
console.log("000");

const FunctionalComponent = () => {
  console.log("111");
  const [detail, setDetail] = useState([initValue]);

  useEffect(() => {
    console.log("222");
    setDetail([...detail, { name: "uma", age: "8" }]);
  }, []);

  const checkConsole = () => {
    console.log("333");
  }

  return (
    <div>
      <h1>FunctionalComponent</h1>
      <p>{checkConsole()}</p>
      {detail.map((value, index) => (
        <div key={index}>
          <h2>{value.name}</h2>
          <h2>{value.age}</h2>
        </div>
      ))}
    </div>
  );
};

export default FunctionalComponent;
