const API_URL = 'http://localhost:5000/api/auth';

export const getAccountDetails = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/account`, {
    method: 'GET',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};