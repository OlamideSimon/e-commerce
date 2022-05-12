import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer';
import Header from './component/Header';
import About from './pages/About';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <ToastContainer />
      <div className='overflow-x-hidden min-h-screen bg-gradient-to-t from-[#000000] relative to-[#2c3e50]'>
        <Header />
        <div className='mb-10'>
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='categories/:category' element={<Category />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
