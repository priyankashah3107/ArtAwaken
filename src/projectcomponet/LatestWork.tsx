"use client";
import React from 'react';
import latestwork from "../../public/latestasset/latest.js";
import Image from 'next/image';
import "../projectcomponet/card.css"
import { formatCurrency } from '@/utils/formatCurrency'

const LatestWork = () => {
  return (
    <div className=' flex flex-col justify-center items-center '>
      <h1 className="text-black text-center text-[35px] lg:text-[70px] font-extrabold leading-tight lg:leading-[70px] mt-20 lg:mt-32">
        Latest Work
      </h1>

      {/* <div className='outerdiv'>
        <div className="grid grid-cols-2 gap-12 lg:gap-14  lg:ml-0 md:-mr-0 md:gap-6 mt-16 lg:mt-28 px-2 lg:px-32 md:grid-cols-3 lg:grid-cols-4">
          {latestwork.map((val, idx) => (
            <div key={idx} className='bg-white  p-4  rounded-xl shadow-sm mx-auto md:mx-0 '>
              
              <div className='relative'>
              <Image src={val.img} alt="img" width={300} height={300} className='rounded-lg mb-4 ' />
              <p className="w-[90px] h-[26px]  py-0.5  bg-gradient-to-r from-white to-white  backdrop-blur-md opacity-70 rounded-xl justify-center items-start gap-2 inline-flex text-[15px] font-normal text-black  mb-2 ml-2 font-inter absolute left-0 bottom-0 ">{val.price}</p>
              </div>
              <div className='flex flex-col'>
                <h1 className="text-xl font-bold mb-1 cardheading">{val.tit}</h1>
                <div className='flex flex-row justify-between items-center mb-1'>
                  <p className="text-sm cardes  font-inter text-gray-600">{val.name}</p>
                  <div className="">{val.buy}</div>
                </div>
                <p className="text-sm paintinginfo font-cormorant text-gray-500">{val.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}


      <div className='ml-10 mt-20 lg:mt-32 mr-10  grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-10 md:gap-12 justify-center items-center '>

        {latestwork.map((val, idx) => (
          <div key={idx}>
             {/* <Image src={val.img} alt='img' width={150} height={150} className='img md:w-[300px] md:h-[300px] cursor-pointer'/> */}
             <div className='relative'>
              <Image src={val.img} alt="img" width={150} height={150} className='img md:w-[300px] md:h-[300px] cursor-pointer' />
              <p className="w-[65px] h-[25px] md:w-[90px] md:h-[26px]  py-0.5  bg-gradient-to-r from-white to-white  backdrop-blur-md opacity-70 rounded-xl justify-center items-start gap-2 inline-flex text-[15px] font-normal text-black  mb-2 ml-2 font-inter absolute left-0 bottom-0 cursor-pointer">{formatCurrency(val.price)}</p>
              </div>

<div className='cardItems cursor-pointer mt-6 pl-4  md:mr-16 '>
  <h1 className='heading md:text-[20px] md:leading-tight'>{val.tit}</h1>
   <div className='flex flex-col md:flex-row justify-between mt-4'>
   <h5 className='name text-[10px] md:text-[15px]  md:leading-tight'>{val.name}</h5>
   <button className='btnn btnText mt-1 mb-1 md:mt-0 md:mb-0'>Buy Now</button>
   </div>
  <p className='cate text-[10px] md:text-[15px]  md:leading-normal'>{val.category}</p>
</div>
          </div>
        ))}

      </div>



</div>
  );
}

export default LatestWork;
