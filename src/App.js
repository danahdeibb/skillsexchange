import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Register from './pages/Register';
import GetInTouch from './pages/GetInTouch';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/register" element={<Register />} />
            <Route path="/get-in-touch" element={<GetInTouch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
