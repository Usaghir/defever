import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import custom styles for our application
import "./App.css";

import Auth from "./services/Auth";
import Navbar from "./components/home/navBar/Navbar";

// Import pages
import Landing from "./components/landing/Landing";
import Covid from "./components/home/covid/Covid";
import Posts from "./components/home/posts/Posts";
import Profile from "./components/home/profile/Profile";
import News from "./components/home/news/News";
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
              <Route path="/news" element={<News />} />
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
