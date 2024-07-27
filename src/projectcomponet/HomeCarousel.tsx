"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import homeimg from "../../public/home/home.js"
import Image from "next/image.js"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HomeCarousel() {
  return (
    <Carousel className="size-[350px]">
      <CarouselContent>
        {
          homeimg.map((data, index) => (
            <CarouselItem key={index}>
            <div className="p-1">
              <Card className=" size-[350px] rounded-tr-[350px]">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image src={data.img} alt="img" width={350} height={350}
                   className="lg:w-[350px] lg:h-[350px]"/>
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
