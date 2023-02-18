
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { useAuth } from 'redux/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export function SharedLayout() {

    const {isLoggedIn} = useAuth();

    return (
        <>
            <header >
               <Navigation/>
                {isLoggedIn && <UserMenu/>}
            </header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </>);
}
