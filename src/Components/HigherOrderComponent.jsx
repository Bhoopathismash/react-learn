import React from 'react';
import HOCWelcome from "./HOCWelcome";

const HigherOrderComponent = (Component) => {
  // HOC Javascript
  function hocFunction (a) {
    return function New2(b) {
      return a + b;
    };
  }

  const result = hocFunction(3);
  //console.log(result(5)); // O/P: 8
  //HOC Javascript

  const NewComponent = (Component) => {
    return (props) => {
      return (
        <div>
          <Component {...props} />
        </div>
      );
    }
  };

  const HOC = NewComponent(HOCWelcome);

  return (
    <>
      <p>HOC Javascript: {result(5)}</p> {/* O/P: 8 */}
      <h4>Function HOC</h4>
      <div><HOC name={'Bhoopathi-Uma'} /></div>
    </>
  );
};

export default HigherOrderComponent;
