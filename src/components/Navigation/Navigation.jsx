import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {!isLoggedIn && (<><NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink></>)}
    </nav>
  );
};