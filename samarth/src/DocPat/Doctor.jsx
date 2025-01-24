import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Doctor = () => {
  const navigate = useNavigate();
  const isAuthenticated = false; // Example: Replace with your actual authentication logic

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate('/Doctor/home');
    }
  }, [isAuthenticated, navigate]);

  // No need to render anything if redirecting
  return null;
};

export default Doctor;
