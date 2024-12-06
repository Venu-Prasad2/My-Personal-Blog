import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import PostDetails from './components/PostDetails';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const location = useLocation();

  // Define routes where Navbar should not be displayed
  const hideNavbarRoutes = ['/login'];

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
