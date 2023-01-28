import React , { useState, useEffect, useCallback } from 'react';
import '../App.css';
import { Button, Form } from 'react-bootstrap';
import UpdateModalComponent from './UpdateModalComponent';

const initialState = {firstName: '', lastName: ''};

function TaskOneComponent() {
  const [userList, setUserList] = useState({});
  const [formData, setFormData] = useState(initialState);
  const [modalShow, setModalShow] = useState(false);
  const [editData, setEditData] = useState({});
  
  /* useEffect(() => {
    setUserList(prev => ([...prev, {firstName: 'Bhoopathi', lastName: 'P'}]));
  }, []); */

  const handleName = (input, e) => {
      setFormData(prev => ({...prev, [input]: e.target.value}));
  };

  const addUser = () => {
    const id = Math.floor((Math.random() * 100) + 1);
    setUserList(prev => ({...prev, [id] : {id, ...formData}}));
    setFormData(initialState);
  };

  const editUser = (id) => {
    const userDetail = userList[id];
    console.log('userDetail', userDetail);
    setEditData(prev => ({...prev, ...userDetail}));
    setModalShow(true);
  };

  const updateUser = (newformData) => {
    const id = newformData.id;
    setUserList(prev => ({...prev, [id] : {...newformData}}));
    setModalShow(false);
  };

  const deleteUser = (index) => {
    let copiedUserList = {...userList};
    delete copiedUserList[index];
    setUserList(userList => ({
      ...copiedUserList
    }));
  }

  //console.log('userList', userList);

  return (
    <>
      <div className='container'>
        <h3 className='align-center'>TaskOneComponent</h3>
        <div class="row justify-content-center">
          <div class="col-6">
            <Form.Group>
              <Form.Label>First Name: </Form.Label><br />
              <input type='text' value={formData.firstName} onChange={(e) => handleName('firstName', e)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name: </Form.Label><br />
              <input type='text' value={formData.lastName} onChange={(e) => handleName('lastName', e)}/>
            </Form.Group>
            <br/>
            <Button className='btn-success' type='button' onClick={() => addUser()}>Add User</Button>
          </div>
        </div>
        <br/>
        <br/>
        <table class="table table-striped">
          <thead>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>          
          </thead>
          <tbody>  
            {Object.keys(userList).length > 0 && Object.keys(userList).map((user, index) => {
              return(
                <tr key={index+1}>
                  <td>{userList[user].id}</td>
                  <td>{userList[user].firstName}</td>
                  <td>{userList[user].lastName}</td>
                  <td>
                    <Button type='button' onClick={() => editUser(userList[user].id)}>Edit</Button>&nbsp;
                    <Button className='btn-danger' type='button' onClick={() => deleteUser(userList[user].id)}>Delete</Button>
                  </td>
                </tr>  
              );
            })}
        </tbody>
        </table>
      </div>
      <UpdateModalComponent 
        show={modalShow}
        onHide={() => setModalShow(false)}
        editData={editData}
        updateUser={updateUser}
      />
      <hr />
    </>
  )
}

export default TaskOneComponent