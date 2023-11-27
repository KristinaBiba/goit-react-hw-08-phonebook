import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/Auth/authOperations';
import { selectUser } from 'redux/selectors';

import { Box, MenuItem, ListItemIcon, Typography } from '@mui/material';
import Logout from '@mui/icons-material/Logout';

export function UserMenu() {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        gap: '8px',
        marginLeft: 'auto',
      }}
    >
      <Typography sx={{ minWidth: 100 }}>{email}</Typography>
      <MenuItem
        onClick={handleLogOut}
        sx={{ border: '1px solid #FFFFFF', borderRadius: '8px' }}
      >
        <ListItemIcon>
          <Logout fontSize="small" sx={{ color: '#FFFFFF' }} />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Box>
  );
}
