import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/home';
import CreateBug from './pages/bug/createBug';
import Profile from './pages/profile/profile'


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/create" element={<CreateBug />}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
