import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from './components/layout/Navbar';

// Import pages
import LoginPage from './components/auth/LoginPage';
import HomePage from './components/home/HomePage';
import PostsPage from './components/posts/PostsPage';
import ProfilePage from './components/profile/ProfilePage';
import Chat from './components/chat/Chat';
import LoginFooter from './components/auth/LoginFooter';
//import ChatApp from "./ChatApp";

import UserApi from './api/UserApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  const [user, setUser] = useState(UserApi.currentUser);
  UserApi.bindCurrentUserStateSetter(setUser);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        <Switch>
          <Route path="/posts">
            <PostsPage />
          </Route>
          <Route path="/profile">
            <ProfilePage user={user} />
          </Route>

          <Route path="/chat">
            <Chat user={user} />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
      <LoginFooter />
    </Router>
  );

  return loggedIn ? (
    loggedInRouter
  ) : (
    <div>
      <LoginPage />
      <LoginFooter />
    </div>
  );
}

export default App;
