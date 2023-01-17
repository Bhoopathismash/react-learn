import React from 'react';
import { useSelector } from 'react-redux';

function Footer(){
    const count = useSelector((state) => state.counter.value);

    return (
        <>
            <p>Footer Count: {count}</p>
        </>
    );
}

export default Footer;