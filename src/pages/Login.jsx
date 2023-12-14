import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { logIn } from 'redux/Auth/authOperations';
import { useAuth } from 'redux/Auth/useAuth';
import { userLoginValidator } from 'utils/userValidation/userLoginValidator';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(userLoginValidator),
  });

  const handleLogIn = ({ userEmail, userPassword }) => {
    dispatch(
      logIn({
        email: userEmail,
        password: userPassword,
      })
    );
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
    <Container component="main" maxWidth="xl">
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
            onSubmit={handleSubmit(handleLogIn)}
            noValidate
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          >
            <FormControl>
              <TextField
                {...register('userEmail')}
                label="Email"
                autoComplete="on"
                type="email"
                name="userEmail"
                onChange={handleChange}
                value={userEmail}
                style={{ width: '38ch' }}
              />
              <Typography
                variant="body2"
                component="p"
                style={{ color: 'red', paddingLeft: '12px' }}
              >
                {errors.userEmail?.message}
              </Typography>
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
                {...register('userPassword')}
                label="Password"
                required
                name="userPassword"
                onChange={handleChange}
                value={userPassword}
                autoComplete="current-password"
              />
              <Typography
                variant="body2"
                component="p"
                style={{ color: 'red', paddingLeft: '12px' }}
              >
                {errors.userPassword?.message}
              </Typography>
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
