import React, {useState} from 'react';
import { Form, Button, Modal } from 'react-bootstrap';


function UpdateModalComponent(props) {
  const editData = props.editData;
  const [formData, setFormData] = useState({...editData});

  const handleName = (input, e) => {
    setFormData(prev => ({...prev, [input]: e.target.value}));
  };

  const handleUpdate = () => {
    props.updateUser(formData);
  }

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
            <Button className='btn-success' type='button' onClick={() => handleUpdate()}>Update User</Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateModalComponent;