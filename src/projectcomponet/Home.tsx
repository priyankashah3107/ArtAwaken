// "use client";
// import React from 'react'
// import MainNav from './MainNav';
// import Navbar from './Navbar';
// import { HomeCarousel } from './HomeCarousel';
// import { ButtonTwo } from './Button';
// import AutoPlay from "embla-carousel-react"
// const Home = () => {
//   return (
//     <>
//       <div>
//         <MainNav />
//         <Navbar />

//         <div className='flex flex-col items-center lg:flex-row justify-between p-32 md:p-20 gap-20 lg:gap-0'>
//           <div className='flex flex-col  gap-6 lg:gap-8 ml-96 md:ml-32 lg:ml-0'>
//             <h1 className="homeh ">Unleash Your <span className='homeir'>Inner Artist</span> <br /> with <span className='text-[#0038FF]'>Awaken</span></h1>

//             <p className='homep w-[500px]  lg:w-1/2'>At Awaken, we believe that everyone has a unique artistic voice waiting to be discovered. Our platform offers a diverse range of resources, tutorials, and inspiration to help you explore and hone your craft. From stunning galleries to in-depth articles and exclusive workshops, you&apos;ll find everything you need to fuel your creativity.</p>
//             <ButtonTwo value={"Explore Now"} />
//           </div>
//           <div className='ml-auto md:ml-32 lg:ml-0'><HomeCarousel /></div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Home


"use client";
import React from 'react'
import MainNav from './MainNav';
import Navbar from './Navbar';
import  HomeCarousel  from './HomeCarousel';
import Button, { ButtonTwo } from './Button';
import AutoPlay from "embla-carousel-react"
const Home = () => {
  return (
    <>
      <div>
        <MainNav />
        <Navbar />

        <div className='flex flex-col items-center lg:flex-row justify-around'>
          <div className='flex flex-col p-3 lg:ml-10  '>
            <h1 className="homeh md:w-[550px]  lg:w-[482px] md:h-[96px]">Unleash Your <span className='homeir'>Inner Artist</span>  with <span className='text-[#0038FF]'>Awaken</span></h1>
              
             {/* <div className=''>
              <HomeCarousel />
              </div>  */}
            <p className='homep mt-2 md:mt-6 md:w-[600px] lg:w-[496px] md:h-[215px]'>At Awaken, we believe that everyone has a unique artistic voice waiting to be discovered. Our platform offers a diverse range of resources, tutorials, and inspiration to help you explore and hone your craft. From stunning galleries to in-depth articles and exclusive workshops, you&apos;ll find everything you need to fuel your creativity.</p>
            {/* <ButtonTwo value={"Explore Now"} /> */}
            <button className='btnMain  md:mt-6 md:rounded-xl md:w-[200px] md:h-[50px] md:text-xl'>Explore Now</button>
          </div>

          <div className='hidden lg:block'>
              <HomeCarousel />
          </div>  
        </div>
      
      </div>
    </>
  )
}

export default Home