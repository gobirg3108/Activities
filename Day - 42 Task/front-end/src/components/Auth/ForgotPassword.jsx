import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from '../../utils/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/auth/forgotpassword', { email });
    history.push('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <button type="submit">Send Reset Link</button>
    </form>
  );
};

export default ForgotPassword;
