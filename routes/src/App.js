import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./components/home/home"; 
import About from "./components/about/about"; 
import Contacts from "./components/contacts/contacts";

const App = () => {
  return (
    <div>      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </div>
  );
};

export default App;
