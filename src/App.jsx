import React from 'react'
import Header from './Components/Header/Header'
 
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css';

import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import CustomCursor from './Components/CustomCursor';
export default function App() {
  return (
    <div className='main'> 
    <div style={{ cursor: "none" }}>
    <CustomCursor />
      <ScrollToTop />
      <Header/>
      <Outlet/>   
      <Footer/>
      </div>
    </div>
  )
}
