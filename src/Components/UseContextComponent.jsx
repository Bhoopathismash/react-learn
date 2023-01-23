import React, { useContext } from 'react';
import { StudentContext } from '../App'

function UseContextComponent() {
    const students = useContext(StudentContext);
   
    return (
        <>
            <h3>Welcome UseContextComponent</h3>

            <ul>
                {students.map(e => <li key={e}>{e}</li>)}
            </ul>

            
        </>
    )
}

export default UseContextComponent;