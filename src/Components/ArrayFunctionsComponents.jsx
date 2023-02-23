import React from 'react'

const ArrayFunctionsComponents = () => {
    const characters = [
        {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            eye_color: 'blue',
            gender: 'male',
        },
        {
            name: 'Darth Vader',
            height: '202',
            mass: '136',
            eye_color: 'yellow',
            gender: 'male',
        },
        {
            name: 'Leia Organa',
            height: '150',
            mass: '49',
            eye_color: 'brown',
            gender: 'female',
        },
        {
            name: 'Anakin Skywalker',
            height: '188',
            mass: '84',
            eye_color: 'blue',
            gender: 'male',
        },
    ];
    
    //Filter 
    const filter = characters.filter((c) => c.mass > 100);
    console.log("Filter - ", filter);
    /*
    O/P:
    Filter -  [
      {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male'
      }
    ]
    */
    
    //Map
    const map = characters.map((c) => c.name);
    console.log('Map - ', map);
    /*
    O/P:
    Map -  [ 'Luke Skywalker', 'Darth Vader', 'Leia Organa', 'Anakin Skywalker' ]
    */
    
    //Some
    const some = characters.some((c) => c.mass < 50);
    console.log('Some - ', some);
    /*
    O/P:
    Some -  true
    */
    
    //Sort
    const sort = characters.sort((a, b) => a.mass - b.mass);
    console.log('Sort - ', sort);
    /*
    O/P:
    Sort -  Sort -  [
      {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female'
      },
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male'
      },
      {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male'
      },
      {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male'
      }
    ]
    */
    
    //Reduce
    // add all mass
    const reduce1 = characters.reduce((acc, cur) => acc + parseInt(cur.mass), 0);
    console.log('Reduce 1 - ', reduce1);
    /*
    O/P:
    Reduce 1 -  346
    */
    // get count of eye color respectively
    const reduce2 = characters.reduce((acc, cur) => {
        const curColor = cur.eye_color;
        if (!acc[curColor]) {
            acc[curColor] = 1;
        } else {
            acc[curColor] += 1;
        }
        return acc;
    }, {});
    console.log('Reduce 2 - ', reduce2);
    /*
    O/P:
    Reduce 2 -  { brown: 1, blue: 2, yellow: 1 }
    */
  return (
    <div>ArrayFunctionsComponents</div>
  )
}

export default ArrayFunctionsComponents