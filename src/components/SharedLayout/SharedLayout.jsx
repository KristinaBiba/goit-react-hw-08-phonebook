import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from 'redux/Auth/useAuth';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Loader } from 'components/Loader/Loader';

import {AppBar, Toolbar, Typography, Container} from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';

export function SharedLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link
              to="/login"
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'inherit',
                textDecoration: 'none',
                height: 36,
              }}
            >
              <DiamondIcon sx={{ display: 'flex', mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="span"
                sx={{
                  mr: 2,
                  display: 'flex',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                PHONEBOOK
              </Typography>
            </Link>
            <Navigation />
            {isLoggedIn && <UserMenu />}
          </Toolbar>
        </Container>
      </AppBar>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        limit={1}
        transition={Zoom}
      />
    </>
  );
}
