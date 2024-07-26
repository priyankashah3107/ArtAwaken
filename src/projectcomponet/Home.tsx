"use client";
import React from 'react'
import MainNav from './MainNav';
import Navbar from './Navbar';
import HomeCarousel from './HomeCarousel';

const Home = () => {
  return (
     <>
     <div>
      <MainNav />
      <Navbar />

      <div>
        <div>1</div>
         <div><HomeCarousel /></div>
      </div>
     </div>
     </>
  )
}

export default Home