import React from 'react'

const CallApplyBindComponent = () => {
    const name1 = {
        fname: 'bhoopathi',
        lname: 'p'
    }
    
    const name2 = {
        fname: 'Uma',
        lname: 'B'
    }
    
    const printName = function (district, state) {
        //console.log(this.fname, place);
        console.log(`Welcome ${this.fname} - ${this.lname} from ${district} - ${state}`);    
    }
    
    // Function Borrowing
    console.log('------------- Call -------------------------');
    printName.call(name1, 'chennai', 'TN');
    printName.call(name2, 'Dgl', 'TN');
    console.log('\n-------------- Apply ------------------------');
    printName.apply(name1, ['chennai', 'TN']);
    printName.apply(name2, ['Dgl', 'TN']);
    console.log('\n----------------- Bind ---------------------');
    const myName = printName.bind(name1, 'chennai', 'TN'); // bind method return a function
    console.log(myName); // Function will be return in log
    myName(); // Call the bind method declartion

    /* O/P:
    ------------- Call -------------------------
    Welcome bhoopathi - p from chennai - TN
    Welcome Uma - B from Dgl - TN

    -------------- Apply ------------------------
    Welcome bhoopathi - p from chennai - TN
    Welcome Uma - B from Dgl - TN

    ----------------- Bind ---------------------
    [Function: bound printName]
    Welcome bhoopathi - p from chennai - TN */

  return (
    <div>callApplyBindComponent</div>
  )
}

export default CallApplyBindComponent