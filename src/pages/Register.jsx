import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { register } from 'redux/Auth/authOperations';
import { useAuth } from 'redux/Auth/useAuth';

import { Loader } from 'components/Loader/Loader';

import {
  Box,
  Card,
  Container,
  CardContent,
  Button,
  TextField,
} from '@mui/material';

function Register() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleRegister = e => {
    e.preventDefault();

    const { userName, userEmail, userPassword } = e.currentTarget.elements;

    dispatch(
      register({
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
      })
    );
    navigate('/', { replace: true });

    setUserName('');
    setUserEmail('');
    setUserPassword('');
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Container maxWidth="xl">
      <h2 style={{ color: '#1976d2', textAlign: 'center', marginTop: 48 }}>
        Don't have an account yet? <br /> Register and start working with
        contacts!
      </h2>
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
            onSubmit={handleRegister}
          >
            <div>
              <TextField
                required
                label="Name"
                autoComplete="on"
                type="text"
                name="userName"
                onChange={handleChange}
                value={userName}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                style={{ width: '38ch' }}
              />
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
              text="Register"
              style={{ marginLeft: '8px' }}
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
