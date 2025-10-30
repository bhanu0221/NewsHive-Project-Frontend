import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Nav.jsx";
import Home from "./Components/Home/Home.jsx";
import Crypto from "./Components/Crypto-News/crypto.jsx";
import Social from "./Components/Social-News/Social.jsx";
import Tech from "./Components/Tech-News/Tech.jsx";
import Sport from "./Components/Football-News/Football.jsx";
import Crime from "./Components/Crime-News/Crime.jsx";
import Games from "./Components/Games-News/Games.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Feed from './Components/Feed-Back/feed.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/crypto" element={<Crypto/>} />
        <Route path="/social" element={<Social/>} />
        <Route path="/tech" element={<Tech/>} />
        <Route path="/football" element={<Sport/>} />
        <Route path="/crime" element={<Crime/>} />
        <Route path="/gaming" element={<Games/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/feedback" element={<Feed/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
