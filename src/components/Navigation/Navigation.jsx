import { Box } from '@mui/material';
import { StyledLink } from './Navigation_css';

export const Navigation = () => {
  return (
    <Box component="nav" sx={{ display: 'flex' }}>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </Box>
  );
};