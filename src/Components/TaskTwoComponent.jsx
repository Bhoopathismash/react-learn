import React from 'react'

const TaskTwoComponent = () => {

    const str = 'madam';
    //using loop
    let newStr = '';
    for(let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    if (str === newStr) 
        console.log('palin') 
    else 
        console.log('not palin', newStr)

    //using function
    console.log('newstr', str.split().reverse().join());


    console.log('Fibonacci Series:');
    const n = 10;
    // 0,1,1,2,3,5,8,13,21,34,55,89,144,
    let a = 0;
    let b = 1;
    console.log(a) 
    console.log(b) 
    let c = '';
    for(let i = 1; i <= n; i++) {
        c = a+b;
        a=b;
        b=c;
        console.log(c)   
    }


  return (
    <div>TaskTwoComponent</div>
  )
}

export default TaskTwoComponent