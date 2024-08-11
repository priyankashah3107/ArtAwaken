// "use client";

// import * as React from "react"

// import featurecard from "../../public/featured/feature.js"
// import { Card, CardContent } from "@/components/ui/card"
// import Image from "next/image.js";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Autoplay from "embla-carousel-autoplay"

// export function FeaturedArtist() {
//   return (
//     <>
//     <h1 className="text-black ml-44 lg:ml-0 w-full text-center text-[45px] lg:text-[70px] font-extrabold leading-tight lg:leading-[70px] mt-24">
//     Featured Artist
//       </h1>
//       <Carousel plugins={[Autoplay({delay: 3000})]}
//       className="w-full ml-60 md:ml-44 lg:ml-96 lg:w-1/2 mt-20 gap-4">
//       <CarouselContent className=" ">
//         {featurecard.map((val, index) => (
//           <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 ">
//           <div className="p-2">
            
//           <div className='relative'>
//               <Image src={val.img} alt="img" width={300} height={300} className=' rounded-lg mb-4 cardimg cursor-pointer ' />
//               <p className="w-[90px] h-[26px]  py-0.5  bg-gradient-to-r from-white to-white  backdrop-blur-md opacity-70 rounded-xl justify-center items-start gap-2 inline-flex text-[15px] font-normal text-black  mb-2 ml-2 font-inter absolute left-0 bottom-0 ">{val.price}</p>
//               </div>
//             <Card>
//               <CardContent className="flex  lg:items-center lg:justify-center p-6">
//                  <div className="flex flex-col gap-3 cursor-pointer">
//                   <h1 className="cardheading">{val.tit}</h1>
//                   <div className="flex flex-row gap-14">
//                     <p className="cardes font-inter">{val.name}</p>
//                     <div>{val.buy}</div>
//                   </div>
//                   <p className="paintinginfo font-cormorant">{val.category}</p>
//                  </div>
//               </CardContent>
//             </Card>
//           </div>
//         </CarouselItem>
//         ))}
//       </CarouselContent>

//       <CarouselPrevious className=""/>
//       <CarouselNext className="" />
//     </Carousel>
//     </>
//   )
// }

// "use client"
// import React from 'react'
// import featurecard from "../../public/featured/feature.js"
// import Image from "next/image.js";
// import "../projectcomponet/card.css"

// const FeaturedArtist = () => {
//   return (
//       <>
//        <div>
//        <h1 className="text-black text-center text-[35px] lg:text-[70px] font-extrabold leading-tight lg:leading-[70px] mt-20 lg:mt-32">
//        Featured Artist
//       </h1>

         
//          {/* carousel */}
//       <div className={`featureBlue md:w-full flex flex-row overflow-hidden justify-center items-center gap-10  `}>
//       {featurecard.map((val, idx) => (
//           <div key={idx} className=''>
//              {/* <Image src={val.img} alt='img' width={150} height={150} className='img md:w-[300px] md:h-[300px] cursor-pointer'/> */}
//              <div className='relative'>
//               <Image src={val.img} alt="img" width={150} height={150} className='img md:w-[300px] md:h-[300px] cursor-pointer' />
//               <p className="w-[65px] h-[25px] md:w-[90px] md:h-[26px]  py-0.5  bg-gradient-to-r from-white to-white  backdrop-blur-md opacity-70 rounded-xl justify-center items-start gap-2 inline-flex text-[15px] font-normal text-black  mb-2 ml-2 font-inter absolute left-0 bottom-0 cursor-pointer">{val.price}</p>
//               </div>

// <div className='cardItems cursor-pointer mt-6 pl-4  md:mr-16 '>
//   <h1 className='heading md:text-[20px] md:leading-tight'>{val.tit}</h1>
//    <div className='flex flex-col md:flex-row justify-between mt-4'>
//    <h5 className='name text-[10px] md:text-[15px]  md:leading-tight'>{val.name}</h5>
//    <button className='btnn btnText mt-1 mb-1 md:mt-0 md:mb-0'>Buy Now</button>
//    </div>
//   <p className='cate text-[10px] md:text-[15px]  md:leading-normal'>{val.category}</p>
// </div>
//           </div>
//         ))}
//       </div>

//        </div>
//       </>
//   )
// }

// export default FeaturedArtist


"use client";
import React, { useState } from 'react';
import featurecard from "../../public/featured/feature.js";
import Image from "next/image";
import "../projectcomponet/card.css";

const FeaturedArtist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? featurecard.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === featurecard.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const renderSlides = () => {
    const slides = [];

    for (let i = 0; i < 3; i++) {
      const slideIndex = (currentIndex + i) % featurecard.length;
      slides.push(
        <div key={slideIndex} className=''>
          <div className='relative'>
            <Image
              src={featurecard[slideIndex].img}
              alt="img"
              width={150}
              height={150}
              className='img md:w-[300px] md:h-[300px] cursor-pointer'
            />
            <p className="w-[65px] h-[25px] md:w-[90px] md:h-[26px] py-0.5 bg-gradient-to-r from-white to-white backdrop-blur-md opacity-70 rounded-xl justify-center items-start gap-2 inline-flex text-[15px] font-normal text-black mb-2 ml-2 font-inter absolute left-0 bottom-0 cursor-pointer">
              {featurecard[slideIndex].price}
            </p>
          </div>

          <div className='cardItems cursor-pointer mt-6 pl-4 md:mr-16'>
            <h1 className='heading md:text-[20px] md:leading-tight'>{featurecard[slideIndex].tit}</h1>
            <div className='flex flex-col md:flex-row justify-between mt-4'>
              <h5 className='name text-[10px] md:text-[15px] md:leading-tight'>{featurecard[slideIndex].name}</h5>
              <button className='btnn btnText mt-1 mb-1 md:mt-0 md:mb-0'>Buy Now</button>
            </div>
            <p className='cate text-[10px] md:text-[15px] md:leading-normal'>{featurecard[slideIndex].category}</p>
          </div>
        </div>
      );
    }

    return slides;
  };

  return (
    <>
      <div>
        <h1 className="text-black text-center text-[35px] lg:text-[70px] font-extrabold leading-tight lg:leading-[70px] mt-20 lg:mt-32">
          Featured Artist
        </h1>

        {/* carousel */}
        <div className="relative featureBlue mt-20 md:mt-32 md:w-full flex flex-row overflow-hidden justify-center items-center gap-10">
          {/* Left Arrow */}
          <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex flex-row gap-10 transition-transform duration-300 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {renderSlides()}
          </div>

          {/* Right Arrow */}
          <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedArtist;
