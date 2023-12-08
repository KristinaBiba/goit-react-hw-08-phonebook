import { Link } from 'react-router-dom';

import { Container, Typography } from '@mui/material';

function NotFound() {
  return (
    <Container component='main' style={{ color: '#1976d2', textAlign: 'center', marginTop: 80 }}>
      <Typography component="h2" variant="h5" gutterBottom>
        "Sorry, this page is not found"
      </Typography>
      <Link to="/">Return to the main page</Link>
    </Container>
  );
}

export default NotFound;
