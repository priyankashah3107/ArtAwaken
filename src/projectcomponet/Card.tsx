import React from 'react'
import "./card.css"
import Image from 'next/image'

interface CardProps {
  title: string,
  name: string,
  btn: string, 
  cate: string
  img: string,
  price: string
}

const Card: React.FC<CardProps> = ({title, name, btn, cate, img, price}) => {
  return (
    <div className=''>
      <div >
  {/* <Image src={img} alt='img' width={150} height={150} className='img md:w-[300px] md:h-[300px] cursor-pointer'/> */}
  <div className='relative'>
              <Image src={img} alt="img" width={150} height={150} className='img md:w-[300px] md:h-[300px] cursor-pointer' />
              <p className="w-[65px] h-[25px] md:w-[90px] md:h-[26px]  py-0.5  bg-gradient-to-r from-white to-white  backdrop-blur-md opacity-70 rounded-xl justify-center items-start gap-2 inline-flex text-[15px] font-normal text-black  mb-2 ml-2 font-inter absolute left-0 bottom-0 cursor-pointer">{price}</p>
              </div>

<div className='cardItems cursor-pointer mt-6 pl-4  md:mr-16 '>
  <h1 className='heading md:text-[20px] md:leading-tight'>{title}</h1>
   <div className='flex flex-col md:flex-row justify-between mt-4'>
   <h5 className='name text-[10px] md:text-[15px]  md:leading-tight'>{name}</h5>
   <button className='btnn btnText mt-1 mb-1 md:mt-0 md:mb-0'>{btn}</button>
   </div>
  <p className='cate text-[10px] md:text-[15px]  md:leading-normal'>{cate}</p>
</div>
      </div>
     
    </div>
  )
}

export default Card