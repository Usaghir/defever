import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from './components/layout/Navbar';
import Footer from './components/home/Footer';

// Import pages
import Home from './components/home/Home';
import Covid from './components/covid/Covid';
import Posts from './components/posts/Posts';
import Profile from './components/profile/Profile';
import Chat from './components/chat/Chat';
//import ChatApp from "./ChatApp";

import UserApi from './api/UserApi';
import Description from './components/home/Description';


function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  const [user, setUser] = useState(UserApi.currentUser);
  UserApi.bindCurrentUserStateSetter(setUser);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />
      <div className="container mt-5">
        <Routes>
        
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/chat" element={<Chat user={user} />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/" element={<Description/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );

  return loggedIn ? (
    loggedInRouter
  ) : (
    <div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
