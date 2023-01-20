import React, { useContext } from "react";
import { ThemeContext } from "../NewApp";

function About() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <p>About</p>

      <p
        style={{
          background: theme.colors.background,
          color: theme.colors.foreground,
        }}
      >
        I am styled by theme context!
      </p>
    </>
  );
}

export default About;
