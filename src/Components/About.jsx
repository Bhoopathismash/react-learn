import React, { useContext } from 'react';
import { ThemeContext } from '../NewApp';

function About() {
    const theme = useContext(ThemeContext);
   
    return (
        <>
            <p>About</p>

            <p style={{ background: theme.background, color: theme.foreground }}>
                I am styled by theme context!
            </p>
        </>
    )
}

export default About;