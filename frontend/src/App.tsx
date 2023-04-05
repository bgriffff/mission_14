import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Movies } from "./components/Movies";
import { Podcast } from "./components/Podcast";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="podcast" element={<Podcast />} />
      </Routes>
    </div>
  );
}

export default App;
