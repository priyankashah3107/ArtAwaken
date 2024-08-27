'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import featurecard from "../../public/featured/feature.js";
import Link from 'next/Link'
import { formatCurrency } from '@/utils/formatCurrency'

export default function FeatureCaro() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])


//   const PaginationSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">

      <h1 className="text-center mt-20 mb-10 md:mt-32 md:mb-20  text-black text-[35px] font-extrabold font-['Sansita Swashed'] leading-[35px]  md:text-[70px] md:leading-[70px]">Featured Artist</h1>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 mb-1">
          {featurecard .map((image, index) => (
            <div key={index} className="flex-[0_0_100%]  min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%]">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <img src={image.img} alt={"img"} className="w-full h-64 object-cover " />
                <div className="p-4 flex flex-col gap-2 mb-1">
                  <h3 className="text-lg font-semibold">{image.tit}</h3>
                  <p className="md:text-[15px] text-gray-600 font-inter md:leading-[20px]">{image.name}</p>
                  <p className="md:text-[15px] text-gray-500 font-cormorant md:leading-[15px]">{image.category}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="w-[65px] h-[25px] md:w-[90px] md:h-[26px]  py-0.5  bg-gradient-to-r from-blue-400 to-purple-400  backdrop-blur-md opacity-70 text-white rounded-xl justify-center items-start gap-2 inline-flex text-[15px] font-normal  mb-2 ml-2 font-inter  cursor-pointer">{formatCurrency( image.price)}</span>
                    <Link href={"/pages/buynow"}style={{color: 'white'}} className='btnn btnText md:text-[20px]'>Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-[45%] md:top-[55%] left-4 lg:-left-10 -translate-/80 rounded-full p-2 shadow-md disabled:opacity"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="w-6 h-6 " />
      </button>
      <button
        className="absolute  top-[45%]  md:top-[55%] right-4 lg:-right-9 -translate-/80 rounded-full p-2 shadow-md disabled:opacity-50"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="w-6 h-6" />
      </button>



      {/* Pagination Dots */}
      {/* <div className='flex justify-center mt-4'>
        {featurecard.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => PaginationSlide(slideIndex)}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${emblaApi === slideIndex ? 'bg-black' : 'bg-gray-400'}`}
          >
            <Circle className='w-full h-full' />
          </div>
        ))}
      </div> */}
    </div>
  )
}