
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';
import Travel from './pages/Travel Packages';
import Guides from './pages/Travel Guides';
import Gallery from './pages/Gallery';


function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />{/*Added Route*/}
        <Route path="/destinations" element={<Destinations />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/travelpackages" element={<Travel />}/>
        <Route path="/travelguides" element={<Guides />} />
        <Route path="/gallery" element={<Gallery />} />


      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
