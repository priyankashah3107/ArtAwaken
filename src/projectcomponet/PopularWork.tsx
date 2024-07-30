"use client";

import * as React from "react"
import populararts from "../../public/popular/popularart.js"
import featurecard from "../../public/featured/feature.js"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image.js";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function PopularWork() {
  return (
    <>
    <h1 className="text-black ml-44 lg:ml-0 w-full text-center text-[45px] lg:text-[70px] font-extrabold leading-tight lg:leading-[70px] mt-24">
    Popular Word
      </h1>
      <Carousel plugins={[Autoplay({delay: 3000})]}
      className="w-full ml-60 md:ml-44 lg:ml-96 lg:w-1/2 mt-20 gap-4">
      <CarouselContent className=" ">
        {populararts.map((val, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 ">
          <div className="p-2">
            
          <div className='relative'>
              <Image src={val.img} alt="img" width={300} height={300} className=' rounded-lg mb-4 cardimg cursor-pointer ' />
              <p className="w-[90px] h-[26px]  py-0.5  bg-gradient-to-r from-white to-white  backdrop-blur-md opacity-70 rounded-xl justify-center items-start gap-2 inline-flex text-[15px] font-normal text-black  mb-2 ml-2 font-inter absolute left-0 bottom-0 ">{val.price}</p>
              </div>
            <Card>
              <CardContent className="flex  lg:items-center lg:justify-center p-6">
                 <div className="flex flex-col gap-3 cursor-pointer">
                  <h1 className="cardheading">{val.tit}</h1>
                  <div className="flex flex-row gap-14">
                    <p className="cardes font-inter">{val.name}</p>
                    <div>{val.buy}</div>
                  </div>
                  <p className="paintinginfo font-cormorant">{val.category}</p>
                 </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className=""/>
      <CarouselNext className="" />
    </Carousel>
    </>
  )
}
