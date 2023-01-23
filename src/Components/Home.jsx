import React, { lazy, Suspense, useContext } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function Home() {

  // Closure example

  function test()
  {
      let a=0;
      function innerTest()
      {
      return a+=1;
      }
      return innerTest;
  }
  
  var x = test();
  console.log(x());
  console.log(x());
  let a =5;
  console.log(a);
  console.log(x());

  // Closure example

  return (
    <>
      <h3>Welcome Home</h3>

      <h2>Lazy loading</h2>
      <Suspense fallback={<div>Loading....</div>}>
        <LazyComponent />
      </Suspense>
    </>
  );
}

export default Home;
