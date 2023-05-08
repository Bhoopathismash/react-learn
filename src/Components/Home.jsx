import React, { lazy, Suspense, useContext } from "react";
import { ThemeContext } from "../App";

const LazyComponent = lazy(() => import("./LazyComponent"));

function Home() {
  const theme = useContext(ThemeContext)
  // Closure example

  function test() {
    let a = 0;
    function innerTest() {
      return (a += 1); // a form clousure here from global scope
    }
    return innerTest;
  }

  var x = test();
  console.log(x()); //1
  console.log(x()); //2 (closure will added)
  let a = 5;
  console.log(a);//5
  console.log(x());//3 (closure will added)

  // Closure example

  return (
    <>
      <h3>Welcome Home</h3>

      <h2>Lazy loading</h2>
      <Suspense fallback={<div>Loading....</div>}>
        <LazyComponent />
      </Suspense>
      <br/>
      <div style={{display: 'block', width: '100px', height: '100px', border: '1px solid', backgroundColor: theme ? '#000' : "#fff"}}> </div>
      
    </>
  );
}

export default Home;
