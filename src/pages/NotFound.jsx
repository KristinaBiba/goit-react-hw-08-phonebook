import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@mui/material';

function NotFound() {
  return (
    <Container style={{ color: '#1976d2', textAlign: 'center', marginTop: 80 }}>
      <h2 >"Sorry, this page is not found"</h2>
      <Link to="/">Return to the main page</Link>
    </Container>
  );
}

export default NotFound;
