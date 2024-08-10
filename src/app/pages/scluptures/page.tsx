"use client"
import React from 'react'
import "./sclp.css"
import MainNav from '@/projectcomponet/MainNav'
import Navbar from '@/projectcomponet/Navbar'
import Image from 'next/image'
import Card from '@/projectcomponet/Card'
const SclupturesPage = () => {
  return (
    <>
      <div>
        {/* <MainNav />
        <Navbar /> */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 md:gap-12 justify-center items-center ml-10 mr-10 '>
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

        <div>
          
        </div>
      
      </div>
    </>
  )
}

export default SclupturesPage