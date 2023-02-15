
import { Link, Outlet } from 'react-router-dom';

export function SharedLayout () {
    return (
        <>
        <header >
            <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/contacts">Contacts</Link>
                </nav>
            <div>
            <p>mango@mail.com</p>
            <button>Logout</button>
            </div>
        </header>
            <main>
                <Outlet/>
        </main>
            

        </>);
}
