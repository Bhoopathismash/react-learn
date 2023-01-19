import React from 'react';

const HigherOrderComponent = (Component) => {
  // HOC Javascript
  function New1(a) {
    return function New2(b) {
      return a + b;
    };
  }

  const result = New1(3);
  //console.log(result(5));
  //HOC Javascript

  const NewComponent = (props) => {
    return (
      <div>
        <Component {...props} />
      </div>
    );
  };

  return (
    <>
      <p>HOC Javascript: {result(5)}</p>
      <div>{NewComponent}</div>
    </>
  );
};

export default HigherOrderComponent;
