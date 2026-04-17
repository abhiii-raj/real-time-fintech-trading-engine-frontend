import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//a package to enable the links, when we want to switch to other parts of the application then we need routers
import './index.css';

import HomePage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage';
import Dashboard from './landing_page/Dashboard';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import TradeChatbot from './landing_page/TradeChatbot';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  {/* navbar and footer is common in all the pages */}
    <Navbar /> 
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="/portfolio-dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<NotFound/>} />
      {/* koi bhi ek aisi link hoti hai jo hamare page per exist nahi karti hai then uske liye not found call ho jayega */}
    </Routes>
    <Footer />
    <TradeChatbot />
    {/* navbar and footer is common in all the pages that's why we are including here*/}
  </BrowserRouter>
);