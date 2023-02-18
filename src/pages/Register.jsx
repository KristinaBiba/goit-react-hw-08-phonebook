import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Label, Input, Button } from "../components/ContactForm/ContactForm_css";
import { register } from 'redux/authOperations';

function Register() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value } = e.target;
    switch (name) {
      case ('userName'):
        setUserName(value);
        break;
      case ('userEmail'):
        setUserEmail(value);
        break;
      case ('userPassword'):
        setUserPassword(value);
        break;
      default:
        setUserName('');
        setUserEmail('');
        setUserPassword('');
        break;
    }    
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const { userName, userEmail, userPassword } = e.currentTarget.elements;

    // const normalizeNewContactName = userName.value.toLowerCase();

    // contacts.find(contact => contact.name.toLowerCase() === normalizeNewContactName) ? alert(`${contactName.value} is already incontacts`) :
    dispatch(register({name: userName.value, email: userEmail.value, password: userPassword.value,}));

        setUserName('');
        setUserEmail('');
        setUserPassword('');
  }

    return (
      <form onSubmit={handleRegister} >
        <Label>Name <Input
          type="text"
          name="userName"
          onChange={handleChange}
          value={userName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /></Label>
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
        //   pattern="/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g"
          title="Password must contain letters and numbers"
          required
        /></Label>
            
        <Button type="submit" text="Register">Register</Button>
      </form>)
}
  
export default Register;