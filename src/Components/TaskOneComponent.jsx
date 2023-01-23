import React , { useState, useEffect, useCallback } from 'react';

const initialState = {firstName: '', lastName: ''};

const listTable = {
  border: 1,
}

function TaskOneComponent() {
  const [userList, setUserList] = useState({});
  const [formData, setFormData] = useState(initialState);

  /* useEffect(() => {
    setUserList(prev => ([...prev, {firstName: 'Bhoopathi', lastName: 'P'}]));
  }, []); */

  const handleName = (input, e) => {
      setFormData(prev => ({...prev, [input]: e.target.value}));
  };

  const addUser = () => {
    console.log('formData', formData);
    const id = Object.keys(userList).length + 1;
    setUserList(prev => ({...prev, [id] : {id, ...formData}}));
    setFormData(initialState);
  };

  const deleteUser = (index) => {
    let copiedUserList = {...userList};
    delete copiedUserList[index];
    setUserList(userList => ({
      ...copiedUserList
    }));
  }

  console.log('userList', userList);

  return (
    <>
      <h3>TaskOneComponent</h3>
      <div>
        <div>
          <label>First Name: </label><br />
          <input type='text' value={formData.firstName} onChange={(e) => handleName('firstName', e)}/>
        </div>
        <div>
          <label>Last Name: </label><br />
          <input type='text' value={formData.lastName} onChange={(e) => handleName('lastName', e)}/>
        </div>
      </div>
      <br/>
      <button type='button' onClick={() => addUser()}>Add User</button>
      <br/>
      <br/>
      <table style={listTable}>
        <thead>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>          
        </thead>
        <tbody>  
          {Object.keys(userList).length > 0 && Object.keys(userList).map((user, index) => {
            console.log('user', userList[user]);
            return(
              <tr key={index+1}>
                <td>{userList[user].id}</td>
                <td>{userList[user].firstName}</td>
                <td>{userList[user].lastName}</td>
                <td>
                  <button type='button'>Edit</button>
                  <button type='button' onClick={() => deleteUser(userList[user].id)}>Delete</button>
                </td>
              </tr>  
            );
          })}
       </tbody>
      </table>
      <hr />
    </>
  )
}

export default TaskOneComponent