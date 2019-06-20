import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/auth';

const Header = props => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          Friendly
        </Menu.Item>
        {props.isLoggedIn ? (
          <React.Fragment>
            <NavLink to="/">
              <Menu.Item>Home</Menu.Item>
            </NavLink>
            <NavLink to="/add">
              <Menu.Item>Add Friend</Menu.Item>
            </NavLink>
            <Menu.Item onClick={() => props.logOut()}>Logout</Menu.Item>
          </React.Fragment>
        ) : (
          <NavLink to="/login">
            <Menu.Item>Login</Menu.Item>
          </NavLink>
        )}
      </Container>
    </Menu>
  </div>
);

export default connect(
  state => state,
  { logOut },
)(Header);
