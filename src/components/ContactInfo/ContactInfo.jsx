import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/Contacts/operations';

import { ModalWindow } from 'components/Modal/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ContactInfo = ({ _id, name, phone }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const dispatch = useDispatch();

  const onDeliteContact = _id => {
    dispatch(deleteContact(_id));
  };

  return (
    <>
            <ListItem
              secondaryAction={
                <>
                <IconButton
                  aria-label="edit"
                  onClick={() => {
                    toggleModal();
                  }}
                  sx={{ flexGrow: 1, maxWidth: '100%' }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    onDeliteContact(_id);
                  }}
                  sx={{ flexGrow: 1, maxWidth: '100%' }}
                >
                  <DeleteIcon />
                </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <PhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                {name}: {phone}
              </ListItemText>
            </ListItem>

{isModalOpen && (
  <ModalWindow isModalOpen={isModalOpen} toggleModal={toggleModal}>
    <ContactForm toggleModal={toggleModal} edit id={_id}/>
  </ModalWindow>
  
)}
  </>);
};

ContactInfo.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
