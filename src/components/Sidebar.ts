import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/home'>Home</Nav.Link>
          <Nav.Link as={Link} to='/search'>Search</Nav.Link>
          <Nav.Link as={Link} to='/favorites'>Favorites</Nav.Link>
          <Nav.Link as={Link} to='/playlists'>Playlists</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
