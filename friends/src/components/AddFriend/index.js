import React, { Component } from 'react';
import { Container, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addFriend } from '../../actions/friends';

class AddFriend extends Component {
  state = {
    firstname: '',
    lastname: '',
    age: '',
    email: '',
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = () => {
    const newFriend = {
      name: `${this.state.firstname.trim()} ${this.state.lastname.trim()}`,
      age: this.state.age.trim(),
      email: this.state.email.trim(),
    };
    if (newFriend.name && newFriend.email && newFriend.age) {
      this.props.addFriend(newFriend).then(this.props.history.push('/'));
    }
  };

  render() {
    return (
      <Container style={{ marginTop: '7em' }}>
        <h1>Add Friend</h1>
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              name="firstname"
              onChange={this.inputChange}
              value={this.state.firstname}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              name="lastname"
              onChange={this.inputChange}
              value={this.state.lastname}
            />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input
              placeholder="Age"
              name="age"
              onChange={this.inputChange}
              value={this.state.age}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              name="email"
              onChange={this.inputChange}
              value={this.state.email}
            />
          </Form.Field>
          <Button type="submit">Add Friend</Button>
        </Form>
      </Container>
    );
  }
}

export default connect(
  null,
  { addFriend },
)(AddFriend);
