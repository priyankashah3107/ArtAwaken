// "use client"
// import * as React from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import homeimg from "../../public/home/home.js"
// import Image from "next/image.js"
// import Autoplay from "embla-carousel-autoplay"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export function HomeCarousel() {
//   return (
//     <Carousel 
//      plugins={[Autoplay({delay: 2000})]}
//     className="size-[200px] lg:w-[580px] lg:h-[541px]">
//       <CarouselContent>
//         {
//           homeimg.map((data, index) => (
//             <CarouselItem key={index} className="">
//             <div className="p-1 lg:p-0">
//               <Card className="  rounded-tr-[300px] bg-[#f5f5f5]">
//                 <CardContent className="flex aspect-square items-center justify-center p-6 lg:p-0">
//                   <Image src={data.img} alt="img" width={650} height={650}
//                    className="rounded-tr-[200px]"/>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//           ))
//         }
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }


"use client"
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Image from 'next/image';
function HomeCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div  className='mr-0 lg:mr-20'>
      <ReactSimplyCarousel
        
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,

          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 580, height: 400, borderRight:200 }}>
        <Image  src={"/home/h1.png"} alt='img' width={200} height={200} className=' size-[200px] lg:w-[580px] lg:h-[540px] rounded-tr-[200px]'/>
        </div>
        <div style={{ width: 580, height: 400, borderRight:200  }}>
        <Image  src={"/home/h2.png"} alt='img' width={200} height={200} className=' size-[200px] lg:w-[580px] lg:h-[540px] rounded-tr-[200px]'/>
        </div>
        <div style={{ width: 580, height: 400, borderRight:200 }}>
        <Image  src={"/home/h3.png"} alt='img' width={200} height={200} className=' size-[200px] lg:w-[580px] lg:h-[540px] rounded-tr-[200px]'/>
        </div>
        <div style={{ width: 580, height: 400, borderRight:200 }}>
        <Image  src={"/home/h4.png"} alt='img' width={200} height={200} className=' size-[200px] lg:w-[580px] lg:h-[540px] rounded-tr-[200px]'/>
        </div>
        <div style={{width: 580, height: 400, borderRight:200  }}>
        <Image  src={"/home/h5.png"} alt='img' width={200} height={200} className=' size-[200px] lg:w-[580px] lg:h-[540px] rounded-tr-[200px]'/>
        </div>
          
        
          {/* <Image src={"/home/h6.png"} alt='img' width={200} height={200} className=' size-[200px] lg:w-[580px] lg:h-[540px] '/> */}
        
        {/* <div style={{ width: 300, height: 300, background: '#065535' }}>
          slide 1
        </div>
        <div style={{ width: 300, height: 300, background: '#000000' }}>
          slide 2
        </div>
        <div style={{ width: 300, height: 300, background: '#133337' }}>
          slide 3
        </div>
        <div style={{ width: 300, height: 300, background: '#ffc0cb' }}>
          slide 4
        </div>
        <div style={{ width: 300, height: 300, background: '#ffffff' }}>
          slide 5
        </div>
        <div style={{ width: 300, height: 300, background: '#ffe4e1' }}>
          slide 6
        </div>
        <div style={{ width: 300, height: 300, background: '#008080' }}>
          slide 7
        </div>
        <div style={{ width: 300, height: 300, background: '#ff0000' }}>
          slide 8
        </div>
        <div style={{ width: 300, height: 300, background: '#e6e6fa' }}>
          slide 9
        </div> */}
      </ReactSimplyCarousel>
    </div>
  );
}

export default HomeCarousel;
