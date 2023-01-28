import React from 'react'
import useInput from '../Hooks/useInput'

const CustomHookComponent = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const handleClick = () => {
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <h3>CustomHookComponent</h3>
            <div>
                <div>
                    <label>First Name:</label>
                    <input type='text' {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type='text' {...bindLastName} />
                </div>
                <div>
                    <button type='button' onClick={() => handleClick()}> Test Custom Hook</button>
                </div>
            </div>
        </div>
    )
}

export default CustomHookComponent