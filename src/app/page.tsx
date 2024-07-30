
import { FeaturedArtist } from '@/projectcomponet/FeaturedArtist'
import Footer from '@/projectcomponet/Footer'
import Home from '@/projectcomponet/Home'
import LatestWork from '@/projectcomponet/LatestWork'
import { PopularWork } from '@/projectcomponet/PopularWork'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full'>
      <Home />
      <LatestWork />
      <FeaturedArtist />
      <PopularWork />
      <Footer />
    </div>
  )
}

export default page