import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { getContacts } from 'redux/selectors';
import { addContact, editContact } from 'redux/Contacts/operations';
import { contactAddValidator } from 'utils/contactValidator/contactAddValidator';

import { Button, Box, TextField, FormControl, Typography } from '@mui/material';

export function ContactForm({ toggleModal, edit, id }) {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  let editContactName = '';
  let editContactPhone = '';

  if (edit) {
    const editContact = contacts.find(contact => contact._id === id);
    editContactName = editContact.name;
    editContactPhone = editContact.phone;
  }
 
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contactName: `${editContactName}`,
      contactPhone: `${editContactPhone}`,
    },
    resolver: joiResolver(contactAddValidator),
  });

  const handleAddContact = ({contactName, contactPhone}) => {
    const normalizeNewContactName = contactName.toLowerCase();

    if (edit) {
      contacts.find(
        contact =>
          contact.name.toLowerCase() === normalizeNewContactName &&
          contact._id !== id
      )
        ? alert(`${contactName} is already incontacts`)
        : dispatch(
            editContact({ name: contactName, phone: contactPhone, id: id })
          );
    } else {
      contacts.find(
        contact => contact.name.toLowerCase() === normalizeNewContactName
      )
        ? alert(`${contactName} is already incontacts`)
        : dispatch(addContact({ name: contactName, phone: contactPhone }));
    }
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
        {edit ? 'Edit contact' : 'Create new contact'}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <FormControl>
          <Controller
            render={({ field }) => <TextField {...field} label="Name" />}
            name="contactName"
            control={control}
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
          <Controller
            render={({ field }) => <TextField {...field} label="Phone" />}
            name="contactPhone"
            control={control}
            required
            type="tel"
            label="Phone"
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
        {edit ? 'Save changes' : 'Add contact'}
      </Button>
    </Box>
  );
}

ContactForm.propTypes = {
  toggleModal: PropTypes.func,
  edit: PropTypes.bool,
  id: PropTypes.string,
};
