import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import "./App.css";

import Auth from "./services/Auth";
import Navbar from "./components/layout/Navbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from "./components/home/HomePage";
import PostsPage from "./components/posts/PostsPage";
import ProfilePage from "./components/profile/ProfilePage";
import ChatPage from "./components/chat/ChatFooter";

import UserApi from "./api/UserApi";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const [user, setUser] = useState(UserApi.currentUser);
  UserApi.bindCurrentUserStateSetter(setUser);

  const loggedInRouter = (
    <Router>
      <Navbar user={user} onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        <Switch>
          <Route path="/posts">
            <PostsPage />
          </Route>
          <Route path="/profile">
            <ProfilePage user={user} />
          </Route>

          <Route path="/chat">
            <ChatPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
