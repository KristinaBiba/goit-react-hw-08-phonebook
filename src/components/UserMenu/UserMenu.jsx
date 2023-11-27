
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Auth/authOperations';
import { selectUser } from "../../redux/selectors";

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Logout from '@mui/icons-material/Logout';

export function UserMenu() {

    const dispatch = useDispatch();
    const { email } = useSelector(selectUser);

    const handleLogOut = () => {
        dispatch(logOut());
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', gap: '8px' }} style={{marginLeft: "auto"}} >
            <Typography sx={{ minWidth: 100 }}>{email}</Typography>
            <MenuItem onClick={handleLogOut} sx={{border: "1px solid #FFFFFF", borderRadius: '8px'}}>
                <ListItemIcon>
                    <Logout fontSize="small" sx={{color: "#FFFFFF"}} />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Box>);
}
