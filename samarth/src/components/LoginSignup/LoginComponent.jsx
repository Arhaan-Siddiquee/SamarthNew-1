import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/authService';
import { toast, ToastContainer } from 'react-toastify';
import { FaHeartbeat } from 'react-icons/fa'; 
import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error('Please fill in both username and password.');
      return;
    }

    setLoading(true);

    try {
      const response = await login(username, password);

      if (response.token) {
        localStorage.setItem('token', response.token);
        toast.success('Login successful!');
        setTimeout(() => navigate('/'), 1500); 
      } else {
        toast.error(response.message || 'Login failed. Please check your credentials.');
      }
    } catch {
      toast.error('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-teal-100 to-blue-200 overflow-hidden">
      
      <ToastContainer position="top-right" autoClose={3000} />

      
      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-300">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 text-center mb-6 flex items-center justify-center gap-2 animate-pulse">
          <FaHeartbeat className="text-3xl" /> 
          Patient Portal Login
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full px-4 py-3 mb-4 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 mb-6 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
              loading && 'opacity-70 cursor-not-allowed'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-700 mt-4">
          Don&apos;t have an account?{' '}
          <span
            onClick={() => navigate('/signup')}
            className="text-teal-500 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
