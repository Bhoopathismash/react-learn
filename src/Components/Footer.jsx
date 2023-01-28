import React from 'react';
import { useSelector } from 'react-redux';

function Footer(){
    const count = useSelector((state) => state.counter.value);

    return (
        <>
            <hr />
            <div className='container'>
                <p>Footer Count: {count}</p>
            </div>
        </>
    );
}

export default Footer;