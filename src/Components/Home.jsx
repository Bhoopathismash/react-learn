import React, { lazy, Suspense, useContext } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function Home() {
  return (
    <>
      <h3>Welcome Home</h3>
      <Suspense fallback={<div>Loading....</div>}>
        <LazyComponent />
      </Suspense>
    </>
  );
}

export default Home;
