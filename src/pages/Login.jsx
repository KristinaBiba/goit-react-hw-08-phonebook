import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/Auth/authOperations';
import { useAuth } from 'redux/Auth/useAuth';

import { Loader } from 'components/Loader/Loader';

import {
  Card,
  CardContent,
  Button,
  Container,
  Box,
  FormControl,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const { isLoading } = useAuth();

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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Container component='main' maxWidth="xl">
      <Typography
        variant="h5"
        component="h2"
        align="center"
        color="primary"
        mt={4}
        sx={{ fontWeight: '700' }}
      >
        Log in to start working with contacts
      </Typography>
      <Card
        sx={{
          maxWidth: 375,
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: '32px',
        }}
      >
        <CardContent>
          <Box
            component="form"
            autoComplete="off"
            onSubmit={handleLogIn}
            noValidate
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          >
            <FormControl>
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
            </FormControl>

            <FormControl sx={{ m: 1, width: '38ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" required>
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                required
                pattern="/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g"
                title="Password must contain letters and numbers"
                name="userPassword"
                onChange={handleChange}
                value={userPassword}
                autoComplete="current-password"
              />
            </FormControl>

            <Button
              size="small"
              type="submit"
              text="LogIn"
              style={{ marginLeft: '8px', marginTop: '12px' }}
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
