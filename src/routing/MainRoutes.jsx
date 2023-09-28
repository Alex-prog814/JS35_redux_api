import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserCreate from '../components/UserCreate';
import UserDetails from '../components/UserDetails';
import UserEdit from '../components/UserEdit';
import UsersList from '../components/UsersList';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/register" element={<UserCreate />} />
      <Route path="/details/:id" element={<UserDetails />} />
      <Route path="/edit/:id" element={<UserEdit />} />
    </Routes>
  )
}

export default MainRoutes