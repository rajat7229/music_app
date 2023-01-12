import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import { Container, Button } from 'react-bootstrap';

const LandingPage: React.FC = () => {
  const { keycloak } = useKeycloak();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    await keycloak.login();
    setIsLoggedIn(keycloak.authenticated);
  };

  if (isLoggedIn) {
    return <Redirect to='/home' />;
  }

  return (
    <Container className='d-flex flex-column align-items-center justify-content-center'>
      <h1>Welcome to our Music App</h1>
      <Button variant='primary' onClick={handleLogin}>
        Login with Keycloak
      </Button>
    </Container>
  );
};

export default LandingPage;
