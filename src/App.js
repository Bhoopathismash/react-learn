import React, { createContext, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import UseCallbackComponent from "./Components/UseCallbackComponent";
import UseMemoComponent from "./Components/UseMemoComponent";
import ReduxComponent from "./Components/ReduxComponent";
import ClassTestComponent from "./Components/ClassTestComponent";
import HigherOrderComponent from "./Components/HigherOrderComponent";
import EventHandleComponent from "./Components/EventHandleComponent";
import TaskOneComponent from "./Components/TaskOneComponent";
import CustomHookComponent from "./Components/CustomHookComponent";
import UseContextComponent from "./Components/UseContextComponent";
import RootLayout from "./Layout/RootLayout";

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
      <Route path="/custom-hook" element={<CustomHookComponent />} />
      <Route path="/redux" element={<ReduxComponent />} />
      <Route path="/class" element={<ClassTestComponent />} />
      <Route path="/hoc" element={<HigherOrderComponent />} />
      <Route
        path="/event"
        element={<EventHandleComponent id={11} name={"bhoopathi"} />}
      />
      <Route path="/task1" element={<TaskOneComponent />} />
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
