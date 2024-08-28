"use client"

import { ArrowRightCircleIcon, ArrowLeftCircleIcon, Circle, CircleDot, icons, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import slides from '../../public/buynow/buy';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: "Women"
  },
  {
    id: 2,
    name: "Men"
  },
  {
    id: 3,
    name: "Lover"
  },
  {
    id: 4,
    name: "Scluptures"
  }
]


const links = [
  {
    id: 1,
    icons: "/icons/twitter.svg"
  },
  {
    id: 2,
     icons: "/icons/whatsapp.svg"
  },
  {
    id: 3,
     icons: "/icons/instagram.svg"
  },
  {
    id: 4,
     icons: "/icons/facebook.svg"
  }
]
// // Define the type for slide objects
// interface Slide {
//   url: string;
// }

// // Define the type for the slide array
// const slides: Slide[] = [
//   { url: '/death.png' },
//   { url: '/boy.png' },
//   { url: '/puppet.png' },
//   { url: '/person.png' },
// ];

const PaginationCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstImg = currentIndex === 0;
    const newSlide = isFirstImg ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlide);
  };

  const nextSlide = () => {
    const isLastImg = currentIndex === slides.length - 1;
    const newSlide = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide);
  };

  const PaginationSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=' bg-green-400 w-full py-16 px-4 relative'>
      

      <div className='flex flex-col md:flex-row'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-[350px] h-[461px] md:w-[400px] md:h-[461px] lg:w-[630px] lg:h-[385px] rounded-2xl bg-center bg-cover duration-500 ml-4 md:ml-0'> </div>
           
          <div className='flex flex-col ml-8 mt-6'>

          <div className='flex flex-row gap-2'>
        <Image src="/me.png" alt='profile' width={50} height={50} className='size-[50px] md:size-[80px] rounded-full'  />
        <h2>Priyanka shah</h2>
        </div> 

        <div className='flex flex-row gap-2'>
        <h2>People Who lived thier Life</h2>
        <button className='w-[97px] h-[30px]  rounded-full text-center justify-center items-center border-2 border-[#FF00B8]'>Scluptures</button> 
        </div>


        <div className='grid grid-cols-2  '>
         {categories.map((val, idx) => (
           <p key={idx} className='w-[97px] h-[30px] mt-2 cursor-pointer bg-[#F1E9FF] pt-0.5 font-inter text-[14px] font-medium rounded-full text-center justify-center md:justify-start  items-center md:items-start border-2 border-gray-50'>{val.name}</p>
         ))}
        </div>

        <div>
          <h1>Share on</h1>
          <div className='flex flex-row gap-4'>
           {links.map((val, idx) => (
            <Image key={idx} src={val.icons} alt='icons' width={25} height={25} className='size-[25px]'/> 
           ))}
          </div>
        </div>

         <div>
          <button>Buy Now </button>
         </div>

       </div>
      </div>
       
      <div className='absolute top-[40%] md:hidden  -translate-x-0 translate-y-[-50%] left-10 md:left-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronLeft size={30} onClick={prevSlide} />
      </div>

      <div className='absolute top-[40%] md:hidden  left-[75%] md:left-[45%] lg:left-[42%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronRight size={30} onClick={nextSlide} />
      </div>

<div className='hidden lg:flex lg:top-4  md:justify-start lg:ml-0 lg:md:ml-10 lg:mt-0 lg:md:mt-4 lg:gap-3 lg:py-2'>
  {slides.map((slide, slideIndex) => (
    <div
      key={slideIndex}
      onClick={() => PaginationSlide(slideIndex)}
      className='flex flex-row hover:bg-black rounded-full cursor-pointer'
    >
      <Circle />
    </div>
  ))}
</div>

    </div>
  );
};

export default PaginationCarousel;
