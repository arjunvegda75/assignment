import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ModalRegistrationForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

      <div className="App">
        <h3>Modal Registration Form</h3>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>REGISTER MY ACCOUNT DETAILS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Firstname</Form.Label>
                <Form.Control as="textarea" rows={1} placeholder="Enter Firstname " />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1" 
              >
                <Form.Label>Lastname</Form.Label>
                <Form.Control as="textarea" rows={1}  placeholder="Enter Lastname "/>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control type="number" placeholder="Enter mobile no. " />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                 <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              {["checkbox"].map((type) => (
                <div key={type} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Remembre Me On This Computer`}
                  />
                </div>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-warning"
              className="w-75"
              onClick={handleClose}
              id="bttn-reg"
            >
              Register
            </Button>
          </Modal.Footer>
          <div className="regis">
            <p>Forgot Your Password?</p>
            <p>
              <a href="#">Creat A New Account</a>
            </p>
          </div>
        </Modal>
        
      </div>
    
  );
};

export default ModalRegistrationForm;
