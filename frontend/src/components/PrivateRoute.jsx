import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const PrivateRoute = ({ element }) => {
  const user = useSelector(selectUser);

  return user ? element : <Navigate to="/auth" />;
};

export default PrivateRoute;
