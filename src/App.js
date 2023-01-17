import React, { useCallback } from "react";
import { useSelector, useDispatch} from "react-redux";

function App() {
  const loginSelector = useSelector((state) => state);
  const dispatch = useDispatch();
  const middleware = () => {
    console.log('1111');
    const dispatch1 = () => {
      console.log('2222');
      dispatch({type: 'login_start'});

      //fetch("https://jsonplaceholder.typicode.com/todos/1")
      fetch("https://reqres.in/api/users/2")
        .then((response) => response.json())
        .then((json) => dispatch({ type: "login_success", payload: json }))
        .catch((err) => dispatch({ type: "login_error", error: "ERROR" }));
    };

    return dispatch1();
  };

  const test = useCallback(() => {
    console.log("hii");
  }, []);

  return (
    <div>
      <h1>Hello!</h1>
      <p>Test</p>
      <p>{test()}</p>
      <h3>Redux</h3>
      <p>{loginSelector.loading ? 'true' : 'false'}</p>
      <p>{JSON.stringify(loginSelector.data)}</p>
      <p>{loginSelector.error}</p>
      <button type="button" onClick={() => dispatch(middleware)}>
        {" "}
        Login Start
      </button>
    </div>
  );
}

export default App;
