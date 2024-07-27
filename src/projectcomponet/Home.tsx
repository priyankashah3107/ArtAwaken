"use client";
import React from 'react'
import MainNav from './MainNav';
import Navbar from './Navbar';
import {HomeCarousel} from './HomeCarousel';
import { ButtonTwo } from './Button';
import AutoPlay from "embla-carousel-react"
const Home = () => {
  return (
     <>
     <div>
      <MainNav />
      <Navbar />

      <div className='flex flex-col items-center lg:flex-row justify-between p-20'>
        <div className='flex flex-col gap-6 lg:gap-8 '>
          <h1 className="homeh ">Unleash Your <span className='homeir'>Inner Artist</span> <br /> with <span className='text-[#0038FF]'>Awaken</span></h1>

          <p className='homep w-screen  lg:w-1/2'>At Awaken, we believe that everyone has a unique artistic voice waiting to be discovered. Our platform offers a diverse range of resources, tutorials, and inspiration to help you explore and hone your craft. From stunning galleries to in-depth articles and exclusive workshops, you'll find everything you need to fuel your creativity.</p>
          <ButtonTwo value={"Explore Now"} />
        </div>
         <div><HomeCarousel /></div>
      </div>
     </div>
     </>
  )
}

export default Home