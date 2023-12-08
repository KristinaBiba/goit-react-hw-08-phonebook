import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

export const Section = ({ title, children }) => {
  return (
    <Box
      component="main"
      sx={{ marginTop: '12px', marginBottom: '12px', textAlign: 'center' }}
    >
      {title && (
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: 'center', marginBottom: '12px' }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
