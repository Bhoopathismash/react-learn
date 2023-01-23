import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/store/reduxIndex";
import { BrowserRouter } from "react-router-dom";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routing from "./Routes/Routing";
import ErrorPageComponent from "./Components/ErrorPageComponent";

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Routing />,
    errorElement: <ErrorPageComponent />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
