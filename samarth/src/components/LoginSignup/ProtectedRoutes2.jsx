
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute2 = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/Patient/login" />;
};
ProtectedRoute2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute2;
