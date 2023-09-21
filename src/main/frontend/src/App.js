import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import custom styles for our application
import "./App.css";

import Auth from "./services/Auth";
import Navbar from "./components/home/navBar/Navbar";
import Footer from "./components/landing/Footer";

// Import pages
import Landing from "./components/landing/Landing";
import Covid from "./components/home/covid/Covid";
import Posts from "./components/home/posts/Posts";
import Profile from "./components/home/profile/Profile";
import Chat from "./components/home/chat/Chat";
//import ChatApp from "./ChatApp";

import UserApi from "./api/UserApi";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  const [user, setUser] = useState(UserApi.currentUser);
  UserApi.bindCurrentUserStateSetter(setUser);

  const loggedInRouter = (
    <div className="bg-home">
      <div>
        <Router>
          <Navbar onLogout={() => Auth.logout()} />
          <div className="container mt-5">
            <Routes>
              <Route path="/posts" element={<Posts />} />
              <Route path="/profile" element={<Profile user={user} />} />
              <Route path="/chat" element={<Chat user={user} />} />
              <Route path="/" element={<Covid />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );

  return loggedIn ? loggedInRouter : <Landing />;
}

export default App;
