import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, login } from '../../../services/authService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!username || !password) {
      toast.error('Username and password are required.');
      return;
    }

    
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long.');
      return;
    }

    setLoading(true);

    try {
      const response = await signup(username, password);
      if (response.message === 'User created successfully') {
        
        const loginResponse = await login(username, password);
        if (loginResponse.token) {
          localStorage.setItem('token', loginResponse.token);
          toast.success('Signup and login successful!');
          navigate('/'); 
        } else {
          toast.error(loginResponse.message || 'Login failed.');
        }
      } else {
        toast.error(response.message || 'Signup failed. Please try again.');
      }
    } catch {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-teal-100 to-blue-200 overflow-hidden">
      
      <ToastContainer position="top-right" autoClose={3000} />

      
      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-300">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 text-center mb-6">
          Create Your Account
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
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-700 mt-4">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-teal-500 cursor-pointer hover:underline"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupComponent;
