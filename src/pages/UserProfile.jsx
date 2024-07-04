import { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
const [user, setUser] = useState({
    name: '',
    email: ''
});
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchUserProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/users/me', {
        headers: { 'x-auth-token': token }
        });
        setUser(res.data);
        setLoading(false);
    } catch (err) {
        setError(err.response ? err.response.data : err.message);
        setLoading(false);
    }
    };

    fetchUserProfile();
}, []);

const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put('http://localhost:5000/api/users/me', user, {
        headers: { 'x-auth-token': token }
      });
      setUser(res.data);
      alert('Perfil actualizado correctamente');
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <button type="submit">Actualizar Perfil</button>
      </form>
    </div>
  );
};

export default UserProfile;