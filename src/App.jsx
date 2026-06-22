import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import About from "./pages/about";
import Awards from "./pages/awards";
import Books from "./pages/books";
import Contact from "./pages/contact";
import Education from "./pages/education";
import Family from "./pages/family";
import Home from "./pages/home";
import Work from "./pages/work";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/books" element={<Books />} />
        <Route path="/family" element={<Family />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;