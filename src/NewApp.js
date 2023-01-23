import React, { createContext, useState, useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
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

export const StudentContext = createContext([]);

export const ThemeContext = createContext();

function NewApp() {
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
      <Header />     
      <hr />
      <form onSubmit={mySubmit}>
        <label> Context test </label> <br />
        <input type="text" value={name} onChange={myChange} /> <br />
        <button type="submit">Sumbit</button>
      </form>
      <hr />
      <StudentContext.Provider value={studentNames}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/use-memo" element={<UseMemoComponent />} />
          <Route
            exact
            path="/use-callback"
            element={<UseCallbackComponent />}
          />

          <Route exact path="/redux" element={<ReduxComponent />} />
          <Route exact path="/class" element={<ClassTestComponent />} />
          <Route exact path="/hoc" element={<HigherOrderComponent />} />
          <Route
            exact
            path="/event"
            element={<EventHandleComponent id={11} name={"bhoopathi"} />}
          />
        </Routes>
      </StudentContext.Provider>

      <Footer />
    </>
  );
}

export default NewApp;
