"use client";
import React from 'react';
import latestwork from "../../public/latestasset/latest.js";
import Image from 'next/image';

const LatestWork = () => {
  return (
    <div className='mt-20 px-4 flex flex-col justify-center items-center -mr-52 lg:-mr-0'>
      <h1 className="text-black text-center text-[45px] lg:text-[70px] font-extrabold leading-tight lg:leading-[70px]">
        Latest Work
      </h1>

      <div className='outerdiv'>
        <div className="grid grid-cols-2 gap-12 lg:gap-14 -mr-96 md:-mr-0 md:gap-6 mt-16 lg:mt-28 px-2 lg:px-32 md:grid-cols-3 lg:grid-cols-4">
          {latestwork.map((val, idx) => (
            <div key={idx} className='bg-white  p-4  rounded-xl shadow-sm mx-auto md:mx-0 '>
              
              <div className='relative'>
              <Image src={val.img} alt="img" width={300} height={300} className='rounded-lg mb-4 ' />
              <p className="w-[90px] h-[26px] price py-0.5  bg-gradient-to-r from-white to-white  backdrop-blur-md opacity-70 rounded-xl justify-center items-start gap-2 inline-flex text-[15px] font-normal text-black  mb-2 ml-2 font-inter absolute left-0 bottom-0 ">{val.price}</p>
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
      </div>
    </div>
  );
}

export default LatestWork;
