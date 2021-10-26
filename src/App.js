import React from "react";
import "./App.css";
import DisplayContact from "./Components/DisplayContact";
import AddContactForm from "./Components/AddContactForm";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "diallo",
          phone: "0240958845",
          location: "abofu",
          id: "89542gcvbire1234",
        },
        {
          name: "Bah",
          phone: "0240958845",
          location: "cobaya",
          id: "45667vbcvcdscv086",
        },
        {
          name: "diallo",
          phone: "0240958845",
          location: "labe",
          id: "123456sdjkdfjfg899",
        },
      ],
    };
  }
  //  add new contact function------------------------------------------

  // delete a spaecific eleemt in the array funcrion---------------------------
  //  DeleteContact = (id) => {
  //   let undeletedContacts = this.state.contacts.filter(
  //     (contact) => contact.id !== id
  //   );
  //   this.setState({
  //     contacts: undeletedContacts,
  //   });
  // };
  // editt a new contact function--------------------------------------
  // EditContact = (id, updatedContact) => {
  //   this.setState({
  //     contacts: this.state.contacts.map((contact) =>
  //       contact.id === id ? updatedContact : contact
  //     ),
  //   });
  // };

  // render method-------------------------------------------------
  render() {
    return (
      <>
        <Container style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <AddContactForm />
            </Col>
            <Col md="6">
              <DisplayContact
                data={this.state.contacts}
                DeleteContact={this.DeleteContact}
                EditContact={this.EditContact}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
