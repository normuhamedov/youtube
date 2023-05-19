import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { auth } from './firebase';

import { CgLogOut } from 'react-icons/cg';
import Useparam from './useparam/Useparam';
import History from './history/History';
import Saidbar from './Saidbar/Saidbar';
import Potpis from './potpiska/Potpis';
import Navbar from './navbar/Navbar';
import Shorts from './shorts/Shorts';
import Biblet from './biblet/Biblet';
import Vedio from './vedio/Vedio';
import Games from './games/Games';
import Watch from './watch/Watch';
import Card from './cards/Card';
import Musc from './music/Musc';

import Like from './like/Like';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
  };

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      {user && (
        <>
          <button className="logout_btn" onClick={handleLogout}>
            <CgLogOut /> Logout
          </button>
          <Navbar />
          <Vedio />
          <div className="grid grid-rows-1 grid-flow-col">
            <Saidbar />
            <Routes className="flex-col">
              <Route path={`/games:title`} element={<Useparam />} />
              <Route path={`/:title`} element={<Useparam />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/history" element={<History />} />
              <Route path="/biblet" element={<Biblet />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/games" element={<Games />} />
              <Route path="/watch" element={<Watch />} />
              <Route path="/pat" element={<Potpis />} />
              <Route path="/music" element={<Musc />} />
              <Route path="/like" element={<Like />} />
              
              <Route path="/" element={<Card />} />
            </Routes>
          </div>
        </>
      )}
      {!user && (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
