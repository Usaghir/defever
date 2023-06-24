import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from './components/layout/Navbar';

// Import pages
import Home from './components/home/Home';
import Covid from './components/covid/Covid';
import Posts from './components/posts/Posts';
import Profile from './components/profile/Profile';
import Chat from './components/chat/Chat';
import Footer from './components/home/Footer';
//import ChatApp from "./ChatApp";

import UserApi from './api/UserApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  const [user, setUser] = useState(UserApi.currentUser);
  UserApi.bindCurrentUserStateSetter(setUser);

  const loggedInRouter = (
    <div>
     
      <div className="container mt-5">
      
        <Router>
          <Navbar onLogout={() => Auth.logout()} />
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/chat" element={<Chat user={user} />} />
            <Route path="/covid" element={<Covid />} />            
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
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
