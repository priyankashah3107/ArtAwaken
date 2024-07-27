"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import homeimg from "../../public/home/home.js"
import Image from "next/image.js"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HomeCarousel() {
  return (
    <Carousel 
     plugins={[Autoplay({delay: 2000})]}
    className="size-[550px]">
      <CarouselContent>
        {
          homeimg.map((data, index) => (
            <CarouselItem key={index} className="">
            <div className="p-1">
              <Card className="  rounded-tr-[300px] bg-[#f5f5f5]">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image src={data.img} alt="img" width={650} height={650}
                   className="rounded-tr-[200px]"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
