import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { BarLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { login } from '../../actions/auth';
import { getToken } from '../../localStorage';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  componentDidMount() {
    const token = getToken();
    if (token) {
      return this.props.history.push('/');
    }
  }

  submitHandler = e => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    if (username.trim() && password.trim()) {
      const userDetail = { username, password };
      return this.props
        .login(userDetail)
        .then(() => this.props.history.push('/'));
    }
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            Log-in to your account
          </Header>
          {this.props.error && (
            <Header as="h4" color="red" textAlign="center">
              {this.props.error}
            </Header>
          )}
          <Form onSubmit={this.submitHandler} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.inputChange}
              />
              <Form.Input
                fluid
                type="password"
                icon="lock"
                iconPosition="left"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.inputChange}
              />

              <Button color="black" fluid size="large">
                {this.props.loggingIn ? (
                  <BarLoader
                    css={override}
                    sizeUnit={'px'}
                    size={20}
                    color={'#FFF'}
                  />
                ) : (
                  'Login'
                )}
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  state => state,
  { login },
)(LoginForm);
