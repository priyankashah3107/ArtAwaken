
import  FeaturedArtist  from '@/projectcomponet/FeaturedArtist'
import Footer from '@/projectcomponet/Footer'
import Home from '@/projectcomponet/Home'
import LatestWork from '@/projectcomponet/LatestWork'
import { PopularWork } from '@/projectcomponet/PopularWork'
import React from 'react'
import { Toaster } from 'react-hot-toast';

const page = () => {
  return (
    <>
    <div className='w-full h-full'>
      <Home />
      <LatestWork />
       {/* <FeaturedArtist /> */}
      { /* <PopularWork /> */}
      <Footer /> 
      <Toaster />
    </div>
   
    </>
  )
}

export default page