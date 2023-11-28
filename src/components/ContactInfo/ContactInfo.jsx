import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/Contacts/operations';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactInfo = ({ _id, name, phone }) => {
  const dispatch = useDispatch();

  const onDeliteContact = _id => {
    dispatch(deleteContact(_id));
  };

  return (
            <ListItem
              secondaryAction={
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
  );
};

ContactInfo.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
