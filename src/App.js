import React from 'react';
import { Routes, Route } from "react-router-dom";
import '../src/css/App.css'
import Header from './components/Header'
import Footer from "./components/Footer";
import Home from './components/Pages/Home/Home';
import Contacts from './components/Pages/Contact/Contact';
import About from './components/Pages/About/About';
import Services from './components/Pages/Services/Services';
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Blog from "./components/Pages/Blog/Blog";
import Feature from "./components/Pages/Feature/Feature";

function App() {
    return (
        <div className='app'>
            <Header />
            <div className="page">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/feature" element={<Feature />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
