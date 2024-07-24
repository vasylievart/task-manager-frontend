import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({user: null, token: null});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;
      axios.get('/api/auth')
        .then(response => setAuth({user: response.data, token}))
        .catch(() => setAuth({user: null, token: null}));
    }
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('/api/auth/login', {email, password});
    localStorage.setItem('token', response.data.token);
    setAuth({user: response.data.user, token: response.data.token});
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({user: null, token: null});
  };

  return (
    <AuthContext.Provider value={{auth, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};