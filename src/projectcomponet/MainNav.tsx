// import React from 'react'
// import Button from './Button'
// import Image from 'next/image'
// const mainav = [
//   {
//     id: 1,
//     name: "Exibitions"
//   },
//   {
//     id: 2,
//     name: "Artist"
//   },
//   {
//     id: 3,
//     name: <Button />
//   }
// ]

// const MainNav = () => {
//   return (
//     <>
     
//      <div className="mainNav flex flex-row gap-28 md:gap-44  lg:gap-0  lg:justify-between  pl-10 pr-10 lg:pl-10 lg:pr-14 mt-10 items-center text-center">
//       <div>
//       <Image src={"/logo.png"} alt='img' width={100} height={45} className="w-[200px] h-6 lg:w-[254px] lg:h-[42px] cursor-pointer" />
//       </div>

//       <div className='flex flex-row gap-20 items-center '>
//       {mainav.map((val, idx) => (
//          <div key={idx}>
//            <p className='mainav'>{val.name}</p>
//          </div>
//       ))}
//       </div>
      
//      </div>
//     </>
//   )
// }

// export default MainNav


import React from 'react';
import { ButtonThree } from './Button';

const MainNav = () => {
  return (
    <nav className="flex flex-row items-center lg:justify-between p-8 pl-20  lg:pl-20 lg:p-10 cursor-pointer">
      <div className="artawaken flex flex-row font-rubik-wet-paint lg:text-[45px]">
        Art <span> Awaken</span>
      </div>

      <div className="flex flex-row items-center space-x-20 lg:space-x-14 ml-96 lg:ml-0">
        <div className="flex flex-row text-[25px] font-normal font-sansita leading-[25px] space-x-14 lg:space-x-14">
          <p className="hidden md:block">Exhibitions</p>
          <p className="hidden md:block">Artist</p>
        </div>
        <div className="flex flex-row items-center gap-10 lg:gap-14">
          <ButtonThree value={"Join Us"}  />
          <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.34 17.4229L31.9663 5.86731C32.1559 5.03298 31.5217 4.23848 30.6661 4.23848H8.84489L8.33567 1.74903C8.20878 1.12853 7.66278 0.682922 7.02939 0.682922H1.33333C0.596945 0.682922 0 1.27987 0 2.01626V2.90515C0 3.64153 0.596945 4.23848 1.33333 4.23848H5.21572L9.11839 23.3182C8.18473 23.8551 7.55556 24.8619 7.55556 26.0163C7.55556 27.7345 8.94845 29.1274 10.6667 29.1274C12.3849 29.1274 13.7778 27.7345 13.7778 26.0163C13.7778 25.1455 13.4196 24.3588 12.8431 23.794H24.4902C23.9137 24.3588 23.5556 25.1455 23.5556 26.0163C23.5556 27.7345 24.9485 29.1274 26.6667 29.1274C28.3849 29.1274 29.7778 27.7345 29.7778 26.0163C29.7778 24.7845 29.0618 23.72 28.0234 23.216L28.3299 21.8673C28.5195 21.033 27.8853 20.2385 27.0297 20.2385H12.1176L11.754 18.4607H28.0398C28.6624 18.4607 29.2021 18.0299 29.34 17.4229Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
