
import { FeaturedArtist } from '@/projectcomponet/FeaturedArtist'
import Home from '@/projectcomponet/Home'
import LatestWork from '@/projectcomponet/LatestWork'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-full'>
      <Home />
      <LatestWork />
      <FeaturedArtist />
    </div>
  )
}

export default page