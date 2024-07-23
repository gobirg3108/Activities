import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ token: localStorage.getItem('token') });

  const login = (token) => {
    setAuthState({ token });
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthState({ token: null });
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
