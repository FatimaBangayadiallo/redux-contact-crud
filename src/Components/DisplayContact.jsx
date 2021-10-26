import React from "react";
import OneContact from "./OneContact";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

const DisplayContact = (props) => {
  return (
    <>
      <Container>
        <Row>
          {props.contacts.map((contact) => {
            return (
              <OneContact
                contactInfo={contact}
                key={contact.id}
                deleteContact={props.deleteContact}
                EditContact={props.EditContact}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
export default connect(mapStateToProps)(DisplayContact);
