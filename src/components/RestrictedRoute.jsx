import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from 'redux/Auth/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.shape({
    component: PropTypes.elementType,
    redirectTo: PropTypes.string,
  }),
};