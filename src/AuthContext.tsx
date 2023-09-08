import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextProps {
  children: React.ReactNode;
}
const AuthContext = createContext<any>(null);
export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    setLoggedIn(isAuthenticated);
  }, []);

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
