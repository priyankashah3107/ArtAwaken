"use client"

import { ArrowRightCircleIcon, ArrowLeftCircleIcon, Circle, CircleDot, icons, ChevronLeft, ChevronRight, Check, CheckCircle } from 'lucide-react';
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

const btn = [
  {
    id: 1,
    value: "Buy Now",
  },
  {
    id: 2,
    value: "Add to cart",
  },
  
]

const description =[
  {
    id: 1,
    title: "Description",
    para: "Lovers: Made with Limestone",
    desc: "Eternal Farewell, a poignant sculpture of a deceased man resting in his lover's arms as she tenderly bids him goodbye. This piece captures the serene beauty of love and loss, immortalizing their unbreakable bond."
  }
]

const productInfo = [
  {
    id: 1,
    icon: <CheckCircle />,
    title: "Dimensions",
    para: "H44 W26 D11 cm."
  },
  {
    id: 2,
    icon: <CheckCircle />,
    title: "Style",
    para: "Classical and traditional"
  },
  {
    id: 3,
    icon: <CheckCircle />,
    title: "Framed",
    para: "No"
  },
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
    <div className='  w-full py-16 px-4 relative'>
      

      <div className='flex flex-col md:flex-row'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-[350px] h-[461px] md:w-[400px] md:h-[461px] lg:w-[630px] lg:h-[385px] rounded-2xl bg-center bg-cover duration-500 ml-0 md:ml-0'> </div>
           
          <div className='flex flex-col ml-8 mt-32 md:mt-2'>

          <div className='flex flex-row gap-2'>
        <Image src="/me.png" alt='profile' width={50} height={50} className='size-[50px] md:size-[50px] rounded-full'  />
        <h2 className="text-black text-base md:text-xl mt-2  font-semibold font-inter ">Priyanka shah</h2>
        </div> 

        <div className='flex flex-row gap-2'>
        <h2 className='people md:text-xl md:font-normal  mt-3 mr-4'>People Who lived thier Life</h2>
        <button className='sectionToSell w-[97px] h-[30px] md:text-[14px] mb-4 rounded-full text-center justify-center items-center border-2 border-[#FF00B8]'>Scluptures</button> 
        </div>


        <div className='grid grid-cols-2  '>
         {categories.map((val, idx) => (
           <p key={idx} className='w-[97px] h-[30px]  mt-2 cursor-pointer bg-[#F1E9FF]  font-inter text-[10px] font-medium pt-1 md:font-semibold md:text-[12px] rounded-full text-center justify-center md:justify-start  items-center md:items-start border-2 border-gray-50 md:mt-4 '>{val.name}</p>
         ))}
        </div>

        <div>
          <h1 className='shareOn md:text-2xl md:font-semibold mt-10 mb-2'>Share on</h1>
          <div className='flex flex-row gap-4'>
           {links.map((val, idx) => (
            <Image key={idx} src={val.icons} alt='icons' width={25} height={25} className='size-[25px]'/> 
           ))}
          </div>
        </div>

         <div className='flex flex-row gap-4 mt-10'>
          <button  style={{ boxShadow: '4px 8px 4px 0px #000' }} className='bg-[#fa83d9] w-[120px] h-[30px] rounded-xl text-white text-inter active:shadow-none active:translate-y-[2px] addtoCartbtn'>Buy Now </button>
          <button  style={{ boxShadow: '4px 8px 4px 0px #000' }} className='bg-[#E4D5FE] w-[120px] h-[30px] rounded-xl text-white text-inter active:shadow-none active:translate-y-[2px] addtoCartbtn '>Add to Cart</button>

         </div>

       </div>
      </div>
       
      <div className='absolute top-[40%] md:hidden  -translate-x-0 translate-y-[-50%] left-10 md:left-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronLeft size={30} onClick={prevSlide} />
      </div>

      <div className='absolute top-[40%] md:hidden  left-[75%] md:left-[45%] lg:left-[42%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronRight size={30} onClick={nextSlide} />
      </div>

<div className='hidden md:flex lg:top-4  md:justify-start md:ml-0 lg:md:ml-10  lg:md:mt-4 lg:gap-3 lg:py-2 md:mt-4 lg:mt-4'>
  {slides.map((slide, slideIndex) => (
    <div
      key={slideIndex}
      onClick={() => PaginationSlide(slideIndex)}
      className='flex flex-row hover:bg-black rounded-full cursor-pointer '
    >
      <Circle />
    </div>
  ))}
</div>

    <div className='mt-10 flex flex-col gap-10  pl-10 '>
      {description.map((item, idx) => (
        <div key={idx} className='flex flex-col gap-3'>
          <h1 className='buyTitle md:text-[50px] md:font-semibold '>{item.title}</h1>
          <div className="w-[100px] md:w-[175px] h-[0px] border-2 border-black"></div>
          <h2 className='buyPara md:text-[40px] md:font-normal '>{item.para}</h2>
          <p className='buyDesc md:w-[1040px] md:text-2xl md:font-normal'>"{item.desc}</p>
        </div>
      ))}
      
      
      <div className='grid grid-cols-2 '>
        {productInfo.map((item, idx) => (
          <div key={idx}>
          <div  className='flex flex-row gap-2'>
          <div>{item.icon}</div>
        <h4 className='productInfoBuy  md:text-[20px] md:font-semibold'>{item.title}</h4>
        </div>
        <p className='mt-2 mb-4 ml-2 productInfoPara md:text-[16px] md:font-normal md:ml-10 '>{item.para}</p>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default PaginationCarousel;
