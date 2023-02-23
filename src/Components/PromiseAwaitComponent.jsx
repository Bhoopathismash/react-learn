import React, { useState } from "react";
import { useEffect } from "react";

const PromiseAwaitComponent = () => {
  const [simplePromise, setSimplePromise] = useState(0);
  const [functionPromise, setFunctionPromise] = useState(0);
  const [awaitSimplePromise, setAwaitSimplePromise] = useState(0);

  let pro = new Promise((res, rej) => {
    let a = 5;
    let b = 10;
    let sum = a + b;
    res(sum);
  });

  //Simple promise call
  pro
    .then((resp) => {
      console.log("Welcome - ", resp);
      setSimplePromise(resp);
    })
    .catch((err) => {
      console.log("Error - ", err);
      setSimplePromise(err);
    });

  // Promise using function
  let myFunction = (a, b) => {
    let pro = new Promise((res, rej) => {
      let sum = a + b;
      res(sum);
    });

    return pro;
  };

  let newFunc = myFunction(10, 20);

  newFunc
    .then((resp) => {
      console.log("Welcome - ", resp);
      setFunctionPromise(resp);
    })
    .catch((err) => {
      console.log("Error - ", err);
      setFunctionPromise(err);
    });

  // Await Promise 
  useEffect(() => {
    return async () => {
        try {
            let getAwaitSimplePromise = await pro;
            setAwaitSimplePromise(getAwaitSimplePromise);
        } catch(err) {
            console.log('Error ---', err);
            setAwaitSimplePromise(err);
        }
        
    }
  }, []);

  const f = fetch('https://reqres.in/api/users/2');

  async function myFun() {
    const user = await f;
    const data = await user.json();
    console.log('data', data);
  }
  myFun();

  return (
    <>
      <div>
        <h3>Promise Await Component</h3>
        <p>Simple Promise - {simplePromise}</p>
        <p>Function Promise - {functionPromise}</p>
        <p>Await Simple Promise - {awaitSimplePromise}</p>
      </div>
    </>
  );
};

export default PromiseAwaitComponent;
