import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccountDetails } from '../../../services/accountService';

const AccountComponent = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccountDetails = async () => {
      const response = await getAccountDetails();
      if (response.username) {
        setUsername(response.username);
      } else {
        console.error(response.message);
      }
    };

    fetchAccountDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 w-full max-w-md transition-colors duration-300">
        <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
          Account Details
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Welcome back,{' '}
          <span className="font-semibold text-green-600 dark:text-green-400">
            {username || 'Loading...'}
          </span>
          !
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-green-600 dark:bg-green-500 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountComponent;
