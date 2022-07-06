import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/styles/utilities/fonts/poppins.css";
import "./assets/styles/utilities/normalize.css";
import "./assets/styles/utilities/font-awesome.min.css";

import Navbar from "./components/Partials/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Search from "./components/Pages/Search";
import Visitor from "./components/Pages/Visitor";
import Profile from "./components/Pages/Profile";
import Sign_in from "./components/Pages/Auth/Sign-in";
import Sign_up from "./components/Pages/Auth/Sign-up";
import Footer from "./components/Partials/Footer";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/visitor" element={<Visitor />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/sign-in" element={<Sign_in />}></Route>
          <Route path="/sign-up" element={<Sign_up />}></Route>
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
