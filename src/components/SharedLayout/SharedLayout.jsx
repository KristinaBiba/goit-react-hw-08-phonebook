
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { useAuth } from 'redux/Auth/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DiamondIcon from '@mui/icons-material/Diamond';

export function SharedLayout() {

    const {isLoggedIn} = useAuth();

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <DiamondIcon sx={{ display: 'flex', mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="span"
                        // href="/"
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
                        <Navigation />
                        {isLoggedIn && <UserMenu />}
                    </Toolbar>
                </Container>
            </AppBar>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </>);
}
