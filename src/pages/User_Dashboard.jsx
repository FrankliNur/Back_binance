import { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    const fetchWallets = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/wallets', {
        headers: { 'x-auth-token': token }
      });
      setWallets(res.data);
    };

    fetchWallets();
  }, []);

  return (
    <div>
      <h1>Dashboard de Usuario</h1>
      <h2>Mis Billeteras</h2>
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet._id}>
            <strong>{wallet.moneda.nombre}:</strong> {wallet.saldo} ({wallet.codigo})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;