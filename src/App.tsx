import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer';
import Header from './component/Header';
import About from './pages/About';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Header />
      <div className='pb-3'>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='categories/:category' element={<Category />} />
          <Route path='checkout' element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
