import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { api } from '../../utils/api';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post(`/auth/resetpassword/${token}`, { password });
    history.push('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <label>
        New Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;
