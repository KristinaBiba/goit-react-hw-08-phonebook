import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { registerUser } from 'redux/Auth/authOperations';
import { useAuth } from 'redux/Auth/useAuth';
import { userRegisterValidator } from 'utils/userRegisterValidator';

import { Loader } from 'components/Loader/Loader';

import {
  Box,
  Card,
  Container,
  CardContent,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Register() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();

  const { isLoading } = useAuth();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'userEmail':
        setUserEmail(value);
        break;
      case 'userPassword':
        setUserPassword(value);
        break;
      default:
        setUserName('');
        setUserEmail('');
        setUserPassword('');
        break;
    }
  };
  
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: joiResolver(userRegisterValidator),
  });

  const handleRegister = ({ userName, userEmail, userPassword }) => {
    dispatch(
      registerUser({
        name: userName,
        email: userEmail,
        password: userPassword,
      })
    );
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
        Don't have an account yet? <br /> Register and start working with
        contacts!
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
            onSubmit={handleSubmit(handleRegister)}
            noValidate
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          >
            <FormControl>
              <TextField
                {...register('userName')}
                required
                label="Name"
                autoComplete="on"
                type="text"
                name="userName"
                onChange={handleChange}
                value={userName}
                style={{ width: '38ch' }}
              />
              <Typography variant='body2' component='p' style={{color: 'red', paddingLeft: '12px'}}>{errors.userName?.message}</Typography>
            </FormControl>

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
              <Typography variant='body2' component='p' style={{color: 'red', paddingLeft: '12px'}}>{errors.userEmail?.message}</Typography>
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
                name="userPassword"
                onChange={handleChange}
                value={userPassword}
                autoComplete="current-password"
              />
              <Typography variant='body2' component='p' style={{color: 'red', paddingLeft: '12px'}}>{errors.userPassword?.message}</Typography>
            </FormControl>

            <Button
              size="small"
              type="submit"
              text="Register"
              style={{ marginLeft: '8px', marginTop: '12px' }}
            >
              Register
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Register;
