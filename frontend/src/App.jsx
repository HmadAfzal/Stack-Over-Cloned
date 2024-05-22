import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AskQuestion from './pages/AskQuestion';
import MainQuestion from './pages/MainQuestion';
import Auth from './pages/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import { auth } from './firebase/firebase';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/ask/question" element={<PrivateRoute element={<AskQuestion />} />} />
          <Route path="/question/:id" element={<PrivateRoute element={<MainQuestion />} />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
