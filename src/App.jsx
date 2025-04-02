import React from 'react'
import Header from './Components/Header/Header'
 
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css';

import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
export default function App() {
  return (
    <div> 
      <ScrollToTop />
      <Header/>
      <Outlet/>   
      <Footer/>
    </div>
  )
}
