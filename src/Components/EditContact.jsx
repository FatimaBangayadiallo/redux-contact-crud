import React from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { EditContact } from "../actions/contactAction";

class EditContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.contactInfo.name,
      phone: props.contactInfo.phone,
      location: props.contactInfo.location,
      id: props.contactInfo.id,
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
    this.props.EditContact(this.state.id, this.state);
    this.setState({
      name: "",
      phone: "",
      locataion: "",
      id: "",
    });
    this.props.closeModal();
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
  EditContact,
};
export default connect(null, mapDispatchToProps)(EditContactForm);
