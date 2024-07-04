import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      navigate('/admin-dashboard');
    } else if (role === 'user') {
      navigate('/user-dashboard');
    } else {
      navigate('/login')
    }
  }, [navigate]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;