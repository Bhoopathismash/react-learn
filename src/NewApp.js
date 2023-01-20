import React, { createContext, useState, useEffect } from "react";
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
  const [themeColor, setThemeColor] = useState({});
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  };

  console.log("themes.light", themes.light);

  useEffect(() => {
    setThemeColor((prev) => ({
      ...prev,
      currentTheme: { type: "light", colors: themes.light },
    }));
  }, [themes.light]);

  const myChangeTheme = (e) => {
    const cTheme = themeColor.currentTheme.type === "light";
    setThemeColor((prev) => ({
      ...prev,
      currentTheme: {
        type: cTheme ? "light" : "dark",
        colors: cTheme ? themes.light : themes.dark,
      },
    }));
  };

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
      <button type="button" onClick={myChangeTheme}>
        {themeColor.currentTheme.type === "light" ? "Light" : "Dark"}
      </button>
      <hr />
      <form onSubmit={mySubmit}>
        <label> Context test </label> <br />
        <input type="text" value={name} onChange={myChange} /> <br />
        <button type="submit">Sumbit</button>
      </form>
      <hr />
      <StudentContext.Provider value={studentNames}>
        <ThemeContext.Provider value={themeColor.currentTheme}>
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
            {/* <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route> */}
          </Routes>
        </ThemeContext.Provider>
      </StudentContext.Provider>

      <Footer />
    </>
  );
}

export default NewApp;
