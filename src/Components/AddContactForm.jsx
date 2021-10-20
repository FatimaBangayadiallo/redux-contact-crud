import React from "react";
import { Form, Button } from "react-bootstrap";
import { AddContact } from "../actions/contactAction";
import { connect } from "react-redux";

class AddContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      location: "",
    };
  }
  // handlechange button

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  // handle submit button

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newCo(this.state);
    this.setState({
      name: "",
      phone: "",
      location: "",
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="txt"
            placeholder="Enter name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLocation">
          <Form.Label>Location </Form.Label>
          <Form.Control
            type="txt"
            placeholder="Enter location"
            value={this.state.location}
            name="location"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  newCo: AddContact,
};

export default connect(null, mapDispatchToProps)(AddContactForm);
