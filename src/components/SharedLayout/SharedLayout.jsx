import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from 'redux/Auth/useAuth';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Loader } from 'components/Loader/Loader';

import { Link, AppBar, Toolbar, Container } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';

export function SharedLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
            <Link
              href="/goit-react-hw-08-phonebook/login"
              underline="none"
              color="inherit"
              variant="h6"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
              }}
            >
              <DiamondIcon sx={{ mr: 1 }} />
                PHONEBOOK
            </Link>
            {!isLoggedIn && <Navigation />}
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
