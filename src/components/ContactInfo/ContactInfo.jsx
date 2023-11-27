// import * as React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/Contacts/operations';

import { styled } from '@mui/material/styles';
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Grid,
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactInfo = ({ _id, name, phone }) => {
  const dispatch = useDispatch();

  const onDeliteContact = _id => {
    dispatch(deleteContact(_id));
  };

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
      <Grid item xs={12} md={6}>
        <Demo>
          <List>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    onDeliteContact(_id);
                  }}
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
          </List>
        </Demo>
      </Grid>
    </Box>
  );
};

ContactInfo.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
