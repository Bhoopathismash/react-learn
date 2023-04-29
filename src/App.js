import React, { createContext, useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import UseCallbackComponent from "./Components/UseCallbackComponent";
import UseMemoComponent from "./Components/UseMemoComponent";
import ReduxComponent from "./Components/ReduxComponent";
import FunctionalComponent from "./Components/FunctionalComponent";
import ClassTestComponent from "./Components/ClassTestComponent";
import HigherOrderComponent from "./Components/HigherOrderComponent";
import EventHandleComponent from "./Components/EventHandleComponent";
import TaskOneComponent from "./Components/TaskOneComponent";
import CustomHookComponent from "./Components/CustomHookComponent";
import UseContextComponent from "./Components/UseContextComponent";
import UseReducerComponent from "./Components/UseReducerComponent";
import PromiseAwaitComponent from "./Components/PromiseAwaitComponent";
import ArrayFunctionsComponents from "./Components/ArrayFunctionsComponents";
import CallApplyBindComponent from "./Components/CallApplyBindComponent";
import LoginComponent from "./Components/LoginComponent";
import RegisterComponent from "./Components/RegisterComponent";
import ProfileComponent from "./Components/ProfileComponent";
import LogoutComponent from "./Components/LogoutComponent";
import FunctionPrototypeComponents from "./Components/FunctionPrototypeComponents";

export const StudentContext = createContext([]);

export const ThemeContext = createContext();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/use-callback" element={<UseCallbackComponent />} />
      <Route path="/use-memo" element={<UseMemoComponent />} />
      <Route path="/use-context" element={<UseContextComponent />} />
      <Route path="/use-reducer" element={<UseReducerComponent />} />
      <Route path="/custom-hook" element={<CustomHookComponent />} />
      <Route path="/redux" element={<ReduxComponent />} />
      <Route path="/functional" element={<FunctionalComponent />} />
      <Route path="/class" element={<ClassTestComponent />} />
      <Route path="/hoc" element={<HigherOrderComponent />} />
      <Route
        path="/event"
        element={<EventHandleComponent id={11} name={"bhoopathi"} />}
      />
      <Route path="/promises" element={<PromiseAwaitComponent />} />
      <Route path="/task1" element={<TaskOneComponent />} />
      <Route path="/arr-func" element={<ArrayFunctionsComponents />} />
      <Route path="/call-apply-bind" element={<CallApplyBindComponent />} />
      <Route path="/function-prototype" element={<FunctionPrototypeComponents />} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/register" element={<RegisterComponent />} />
      <Route path="/profile" element={<ProfileComponent />} />
      <Route path="/logout" element={<LogoutComponent />} />
    </Route>
  )
);

function App() {
  const [name, setName] = useState("");
  const [studentNames, setStudentNames] = useState([]);

  const myChange = (e) => {
    setName(e.target.value);
  };

  const mySubmit = (e) => {
    e.preventDefault();
    setStudentNames([...studentNames, name]);
  };

  return (
    <>
      <StudentContext.Provider value={studentNames}>
        <RouterProvider router={router} />
      </StudentContext.Provider>
      <hr />
      <div className='container'>
        <form onSubmit={mySubmit}>
          <label> Context test </label> <br />
          <input type="text" value={name} onChange={myChange} /> <br />
          <button type="submit">Sumbit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default App;
