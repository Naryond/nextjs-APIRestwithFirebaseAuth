import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { NextRouter, useRouter } from 'next/router';

const NavBar = () => {
  const { user, logout } = useAuth();
  const router: NextRouter = useRouter();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>NextJs Firebase Auth</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <>
                <Link href="/dashboard" passHref>
                  <Nav.Link>Dashboard</Nav.Link>
                </Link>
                <Link href="/settings" passHref>
                  <Nav.Link>Settings</Nav.Link>
                </Link>
                <Nav.Link
                  onClick={() => {
                    logout();
                    router.push('/login');
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Link href="/signup" passHref>
                  <Nav.Link>Signup</Nav.Link>
                </Link>
                <Link href="/login" passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
