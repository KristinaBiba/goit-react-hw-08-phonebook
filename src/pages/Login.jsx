import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Label, Input, Button } from "../components/ContactForm/ContactForm_css";
import { logIn } from 'redux/authOperations';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value } = e.target;
    switch (name) {
      case ('userEmail'):
        setUserEmail(value);
        break;
      case ('userPassword'):
        setUserPassword(value);
        break;
      default:
        setUserEmail('');
        setUserPassword('');
        break;
    }    
  }

  const handleLogIn = (e) => {
    e.preventDefault();

    const { userEmail, userPassword } = e.currentTarget.elements;

    // const normalizeNewContactName = userName.value.toLowerCase();

    // contacts.find(contact => contact.name.toLowerCase() === normalizeNewContactName) ? alert(`${contactName.value} is already incontacts`) :
    dispatch(logIn({email: userEmail.value, password: userPassword.value,}));

        setUserEmail('');
        setUserPassword('');
  }

    return (
      <form onSubmit={handleLogIn} >
        <Label>Email <Input
          type="email"
          name="userEmail"
          onChange={handleChange}
          value={userEmail}
          
          title="Email must be digits, letters and contain @"
          required
        /></Label>
        <Label>Password <Input
          type="text"
          name="userPassword"
          onChange={handleChange}
          value={userPassword}
        //   pattern="/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{7,}/g"
          title="Password must contain letters and numbers"
          required
        /></Label>
            
        <Button type="submit" text="LogIn">Log In</Button>
      </form>)
}
  
export default Login;