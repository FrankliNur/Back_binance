import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/admin/users', {
        headers: { 'x-auth-token': token }
      });
      setUsers(res.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Dashboard de Administrador</h1>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>{user.name}:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;