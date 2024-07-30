import React from 'react'
import Button from './Button'
import Image from 'next/image'
const mainav = [
  {
    id: 1,
    name: "Exibitions"
  },
  {
    id: 2,
    name: "Artist"
  },
  {
    id: 3,
    name: <Button />
  }
]

const MainNav = () => {
  return (
    <>
     
     <div className="flex flex-row gap-28 md:gap-44  lg:gap-0  lg:justify-between  pl-10 pr-10 lg:pl-10 lg:pr-14 mt-10 items-center text-center">
      <div>
      <Image src={"/logo.png"} alt='img' width={100} height={45} className="w-[200px] h-6 lg:w-[254px] lg:h-[42px] " />
      </div>

      <div className='flex flex-row gap-20 items-center'>
      {mainav.map((val, idx) => (
         <div key={idx}>
           <p className='mainav'>{val.name}</p>
         </div>
      ))}
      </div>
      
     </div>
    </>
  )
}

export default MainNav