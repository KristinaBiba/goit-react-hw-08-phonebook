import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/Contacts/operations';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function ContactForm({ toggleModal }) {
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'contactName':
        setContactName(value);
        break;
      case 'contactPhone':
        setContactPhone(value);
        break;
      default:
        setContactName('');
        setContactPhone('');
        break;
    }
  };

  const handleAddContact = e => {
    e.preventDefault();

    const { contactName, contactPhone } = e.currentTarget.elements;

    const normalizeNewContactName = contactName.value.toLowerCase();

    console.log('contactName, contactPhone', contactName.value, contactPhone.value);

    contacts.find(
      contact => contact.name.toLowerCase() === normalizeNewContactName
    )
      ? alert(`${contactName.value} is already incontacts`)
      : dispatch(
          addContact({ name: contactName.value, phone: contactPhone.value })
        );

    setContactName('');
    setContactPhone('');
    toggleModal();
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleAddContact}
    >
      <div>
        <TextField
          type="text"
          name="contactName"
          label="Name"
          onChange={handleChange}
          value={contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          style={{ width: '38ch' }}
        />
        <TextField
          required
          type="tel"
          label="Phone"
          name="contactPhone"
          onChange={handleChange}
          value={contactPhone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          style={{ width: '38ch' }}
        />
      </div>

      <Button
        size="small"
        type="submit"
        text="Add contact"
        style={{ marginLeft: '8px' }}
      >
        Add contact
      </Button>
    </Box>
  );
}
