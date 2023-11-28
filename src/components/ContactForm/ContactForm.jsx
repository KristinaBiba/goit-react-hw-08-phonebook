import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/Contacts/operations';

import {Button, Box, TextField, FormControl, Typography} from '@mui/material';

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
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, padding: '12px' }}
      noValidate
      autoComplete="off"
      onSubmit={handleAddContact}
    >
      <Typography variant='h6' component="h3" align="center"
        color="primary" mb={2}> Create new contact</Typography>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <FormControl>
        <TextField
          type="text"
          name="contactName"
          label="Name"
          onChange={handleChange}
          value={contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
          </FormControl>
        <FormControl>
        <TextField
          required
          type="tel"
          label="Phone"
          name="contactPhone"
          onChange={handleChange}
          value={contactPhone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
         </FormControl>
      </Box>

      <Button
        size="small"
        type="submit"
        text="Add contact"
        style={{ marginLeft: '8px', marginTop: '8px' }}
      >
        Add contact
      </Button>
    </Box>
  );
}

ContactForm.propTypes = {
  toggleModal: PropTypes.func,
};
