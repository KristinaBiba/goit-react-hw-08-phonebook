import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/authOperations';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'userEmail':
        setUserEmail(value);
        break;
      case 'userPassword':
        setUserPassword(value);
        break;
      default:
        setUserEmail('');
        setUserPassword('');
        break;
    }
  };

  const handleLogIn = e => {
    e.preventDefault();

    const { userEmail, userPassword } = e.currentTarget.elements;

    dispatch(logIn({ email: userEmail.value, password: userPassword.value }));

    setUserEmail('');
    setUserPassword('');
  };

  return (
    <Container maxWidth="xl">
      <Card
        sx={{ maxWidth: 375 }}
        style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: 24 }}
      >
        <CardContent>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={handleLogIn}
          >
            <div>
              <TextField
                required
                label="Email"
                autoComplete="on"
                type="email"
                name="userEmail"
                onChange={handleChange}
                value={userEmail}
                title="Email must be digits, letters and contain @"
                style={{ width: '38ch' }}
              />
              <TextField
                required
                label="Password"
                autoComplete="current-password"
                type="password"
                name="userPassword"
                onChange={handleChange}
                value={userPassword}
                pattern="/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g"
                title="Password must contain letters and numbers"
                style={{ width: '38ch' }}
              />
            </div>

            <Button
              size="small"
              type="submit"
              text="LogIn"
              style={{ marginLeft: '8px' }}
            >
              Log In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;
