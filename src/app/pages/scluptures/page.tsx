"use client"
import React from 'react'
import "./sclp.css"
import MainNav from '@/projectcomponet/MainNav'
import Navbar from '@/projectcomponet/Navbar'
import Image from 'next/image'
import Card from '@/projectcomponet/Card'
import Footer from '@/projectcomponet/Footer'

const sclup = [
  {id:1 , img: "/scluptures/butt.png"},
  {id:2 , img: "/scluptures/butte.png"},
  {id:3 , img: "/scluptures/sit.png"},
]

const SclupturesPage = () => {
  return (
    <>
      <div className=' '>
         {/* <MainNav /> */}
       {/* <Navbar /> */}
        <div className='ml-10  mr-10  grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-10 md:gap-12 justify-center items-center '>
        <Card img={"/scluptures/lover.png"} title={"Lovers"} name={"Shiv"} btn={"Buy Now"} cate={"Scluptures"}/>
        <Card img={"/scluptures/shiv.png"} title={"Lovers"} name={"Shiv"} btn={"Buy Now"} cate={"Scluptures"}/>
        <Card img={"/scluptures/gold.png"} title={"Lovers"} name={"Shiv"} btn={"Buy Now"} cate={"Scluptures"}/>
        <Card img={"/scluptures/oldman.png"} title={"Lovers"} name={"Shiv"} btn={"Buy Now"} cate={"Scluptures"}/>
        <Card img={"/scluptures/man.png"} title={"Lovers"} name={"Shiv"} btn={"Buy Now"} cate={"Scluptures"}/>
        <Card img={"/scluptures/art.png"} title={"Lovers"} name={"Shiv"} btn={"Buy Now"} cate={"Scluptures"}/>
        <Card img={"/scluptures/nat.png"} title={"Lovers"} name={"Shiv"} btn={"Buy Now"} cate={"Scluptures"}/>
        <Card img={"/scluptures/gold.png"} title={"Lovers"} name={"Shiv"} btn={"Buy Now"} cate={"Scluptures"}/>
        <Card img={"/scluptures/sit.png"} title={"Lovers"} name={"Shiv"} btn={"Buy Now"} cate={"Scluptures"}/>
        </div>

        {/* sclupture of the year */}

        <div className=''>
          <h1 className='sclp bg-white p-4 mt-10 text-[20px] md:text-[50px]'>Scluptures of the year</h1>
            <div className='year p-10 flex flex-row gap-4  justify-center items-center '>
            {sclup.map((val, idx) => (
            <div key={idx} className=' year flex flex-row ml-0 md:ml-14 lg:ml-20'>
              <Image src={val.img} alt='img' width={80} height={80} className='yearItem md:size-[150px] lg:w-[250px] lg:h-[250px] flex'  />
            </div>
           ))}
            </div>
           
        </div>

        {/* <Footer /> */}
      
      </div>
      <Footer />
    </>
  )
}

export default SclupturesPage