import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './auth/protected-route';

function App() {
  const {user} = useAuth0();

  console.log(user)

  return (
     <Routes>
      <Route path="/" element={<ProtectedRoute component={Dashboard} />} />  
      <Route path="/login" element={<Login/>} />  
    </Routes> 
  );
}

export default App;
