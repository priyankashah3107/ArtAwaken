import React from 'react'
import "./card.css"
import Image from 'next/image'
const Card = () => {
  return (
    <div className='card ml-16 mt-10'>
      <Image src={"/featured/dreamy.png"} alt='img' width={150} height={150} className='img'/>

      <div className='cardItems'>
        <h1 className='heading'>Lovers</h1>
         <div className='flex flex-row justify-between'>
         <h5 className='name'>Shiv</h5>
         <button>buy now</button>
         </div>
        <p className='cate'>Photography</p>
      </div>
    </div>
  )
}

export default Card