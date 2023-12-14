import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/Contacts/operations';
import { contactAddValidator } from 'utils/contactValidator/contactAddValidator';

import { Button, Box, TextField, FormControl, Typography } from '@mui/material';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(contactAddValidator),
  });

  const handleAddContact = ({ contactName, contactPhone }) => {
    const normalizeNewContactName = contactName.toLowerCase();

    contacts.find(
      contact => contact.name.toLowerCase() === normalizeNewContactName
    )
      ? alert(`${contactName} is already incontacts`)
      : dispatch(addContact({ name: contactName, phone: contactPhone }));

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
      onSubmit={handleSubmit(handleAddContact)}
    >
      <Typography
        variant="h6"
        component="h3"
        align="center"
        color="primary"
        mb={2}
      >
        {' '}
        Create new contact
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <FormControl>
          <TextField
            {...register('contactName')}
            type="text"
            name="contactName"
            label="Name"
            onChange={handleChange}
            value={contactName}
            required
          />
          <Typography
            variant="body2"
            component="p"
            style={{ color: 'red', paddingLeft: '12px' }}
          >
            {errors.contactName?.message}
          </Typography>
        </FormControl>
        <FormControl>
          <TextField
            {...register('contactPhone')}
            required
            type="tel"
            label="Phone"
            name="contactPhone"
            onChange={handleChange}
            value={contactPhone}
          />
          <Typography
            variant="body2"
            component="p"
            style={{ color: 'red', paddingLeft: '12px' }}
          >
            {errors.contactPhone?.message}
          </Typography>
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
