import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const Activate = () => {
  const { token } = useParams();

  useEffect(() => {
    const activateAccount = async () => {
      try {
        await axios.get(`/api/auth/activate/${token}`);
        alert('Account activated successfully');
      } catch (err) {
        console.error(err);
      }
    };
    activateAccount();
  }, [token]);

  return (
    <Container>
      <Typography variant="h4">Account Activation</Typography>
    </Container>
  );
};

export default Activate;
