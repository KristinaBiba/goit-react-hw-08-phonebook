import { useAuth } from 'redux/Auth/useAuth';

import { Box } from '@mui/material';
import { StyledLink } from './Navigation_css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        {!isLoggedIn && (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </>
        )}
      </Box>
    </nav>
  );
};
