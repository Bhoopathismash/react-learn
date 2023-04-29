import React from 'react'

const FunctionPrototypeComponents = () => {
    const name = {
        fname: "bhoopathi", 
        lname: "p"
    };
    function printName (hometown, state, country) {
        console.log(this.fname + " " + this.lname + " " + hometown + " " + state + " " +country);
    }
    
    const prinymyname = printName.bind(name, 'madurai');
    prinymyname('TN', 'iND');
    
    
    Function.prototype.myBind = function (...args) {
        const obj = this;
        const params = args.slice(1);
        return function (...arg1) {
            console.log(args[0], arg1, params);
            obj.apply(args[0], [...params, ...arg1]);
        }
    }
    
    const prinymyname1 = printName.myBind(name, 'madurai');
    prinymyname1('TN', 'iND');

  return (
    <>
        <h2>FunctionPrototypeComponents</h2>
    </>
  )
}

export default FunctionPrototypeComponents