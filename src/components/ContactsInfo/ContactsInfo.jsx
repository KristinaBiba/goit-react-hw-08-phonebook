import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { ContactInfo } from 'components/ContactInfo/ContactInfo';

import { List } from '@mui/material';

export const ContactsInfo = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const toFiltredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filtredContacts = toFiltredContacts();

  return (
    <List disablePadding sx={{maxWidth: '350px', marginRight: 'auto', marginLeft: 'auto'}}>
      {filtredContacts.map(contact => (
        <ContactInfo key={contact._id} {...contact} />
      ))}
    </List>
  );
};
