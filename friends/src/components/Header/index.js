import React from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react';

const Header = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          Friendly
        </Menu.Item>
        <NavLink to="/">
          <Menu.Item>Home</Menu.Item>
        </NavLink>
      </Container>
    </Menu>
  </div>
);

export default Header;
