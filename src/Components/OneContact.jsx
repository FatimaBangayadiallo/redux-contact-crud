import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditContactForm from "./EditContact";
import { connect } from "react-redux";
import { deleteContact } from "../actions/contactAction";

const OneContact = (props) => {
  // the modal state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // end off the modal state
  // the handleDelete event handler function
  const handleDelelte = (e) => {
    e.preventDefault();
    console.log("id pass to the props", props.contactInfo);
    props.deleteContact(props.contactInfo.id);
  };

  return (
    <>
      {/* the modal to popop */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm
            contactInfo={props.contactInfo}
            EditContact={props.EditContact}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      {/* end of modal to popop */}
      <Col>
        <Card
          style={{
            marginBottom: "1rem",
            width: "10rem",
            backgroundColor: "#bdb76b",
          }}
        >
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              person contact
            </Card.Subtitle>
            <Card.Title>name: {props.contactInfo.name} </Card.Title>
            <Card.Text>
              <p>phone: {props.contactInfo.phone} </p>
              <p>location:{props.contactInfo.location} </p>
            </Card.Text>
            <Card.Link href="#">
              <Button variant="primary" size="sm" onClick={handleShow}>
                Edit
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={handleDelelte}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

const mapDispatchToProps = {
  deleteContact,
};
export default connect(null, mapDispatchToProps)(OneContact);
