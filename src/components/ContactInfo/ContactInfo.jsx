import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/Contacts/operations';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactInfo = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const onDeliteContact = id => {
    dispatch(deleteContact(id));
  };

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <>
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
                      onDeliteContact(id);
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
    </>
  );
};

ContactInfo.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
