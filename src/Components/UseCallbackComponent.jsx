import React, { memo, useCallback, useState } from 'react';

const UseCallbackComponent = () => {
    const [count, setCount] = useState(0);
    const [squareValue, setSquareValue] = useState(1);
    const myCounty = () => {
        setCount(count + 1);
    }
    const addSquare = useCallback(() => {
        console.log('sqaure log', squareValue);
        setSquareValue(squareValue * 2);
    }, [squareValue]);
    return (
        <>
            <h3>useCallback</h3>
            <p>Count: {count}</p>
            <button type='button' onClick={myCounty}>Click</button>

            <p>SquareValue: {squareValue} </p>
            <Square addSquare={addSquare}/>
        </>
    );
}

export default UseCallbackComponent;

const Square = memo((props) => {

    console.log('Square innn');
    return (
        <>
            <button type='button' onClick={props.addSquare}>Square me</button>
        </>
    );

});