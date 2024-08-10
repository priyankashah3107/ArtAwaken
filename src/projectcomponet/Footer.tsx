"use client";
import Image from 'next/image';
import React from 'react'

const foo1 = [
  {id: 1, name: "Art Awaken", desc: "Art is the journey of a free soul, where every piece tells a story that words cannot express"}
]

const category = [
  {
    id: 1,
    cat: "Digital Art"
  },
  {
    id: 2,
    cat: "Painting"
  },
  {
    id: 3,
    cat: "Printmaking"
  },
  {
    id: 4,
    cat: "Digital Art"
  },
  {
    id: 5,
    cat: "Scluptures"
  },
]

const artist = [
  {
    id: 1,
    cat: "Shiv"
  },
  {
    id: 2,
    cat: "Shiva"
  },
  {
    id: 3,
    cat: "Universe"
  },
  {
    id: 4,
    cat: "Bhudda"
  },
  {
    id: 5,
    cat: "Osho"
  },
]

const artcat = [
  {
    id: 1,
    cat: "Work with us"
  },
  {
    id: 2,
    cat: "Contact us"
  },
  {
    id: 3,
    cat: "Privacy Policy"
  },
  {
    id: 4,
    cat: "Term & Conditions"
  },
  
]

// const Footer = () => {
//   return (
//      <>
//      <footer className=' mt-32 pl-60  -mr-96 lg:-mr-0 gap-20 md:pl-64 md:gap-20 lg:p-20 lg:pl-32 grid grid-cols-2 lg:grid-cols-4 lg:gap-20'>
//          <div className='mt-14'>
//           {foo1.map((val, idx) => (
//             <div key={idx} className='flex flex-col gap-6'>
//               <h1 className='fooh font-rubik-wet-paint'>{val.name}</h1>
//               <p className='foop font-cormorant '>{val.desc}</p>
//             </div>
//           ))}
//          </div>

//          <div className='flex flex-col gap-4 mt-16'>
//          <h3 className='art font-inter '>ART CATEGORY</h3>
//           {category.map((val, idx) => (
//             <div key={idx} >
//               <p className=' artd font-cormorant ' >{val.cat}</p>
//             </div>
//           ))}
//          </div>
        

//          <div className='flex flex-col gap-4 mt-16'>
//          <h3 className='art font-inter'>ARTISTS</h3>
//           {artist.map((val, idx) => (
//             <div key={idx} >
//               <p className=' artd font-cormorant' >{val.cat}</p>
//             </div>
//           ))}
//          </div>

//          <div className='flex flex-col gap-4 mt-16'>
//          <h3 className='art font-inter'>About Us</h3>
//           {artcat.map((val, idx) => (
//             <div key={idx} >
//               <p className=' artd font-cormorant' >{val.cat}</p>
//             </div>
//           ))}
//          </div>
//      </footer>
//      </>
//   )
// }

// export default Footer




const Footer = () => {
  return (
    <>
     <footer className=' grid grid-cols-2 lg:grid-cols-4 bg-[#FAF1FA]  p-20 lg:gap-20 mt-32  md:mt-44 '>

      <div className=''>
        {foo1.map((item, idx) => (
        <div key={idx}  className='flex flex-col gap-3 md:gap-4 '>

          {/* <h1>{item.name}</h1> */}
          <Image src={"/logo.png"} alt='logo' width={70} height={35} className='md:w-[200px] md:h-[35px]' />
          <p className='fooP md:text-[25px] md:leading-[28px] '>{item.desc}</p>
        </div>
      ))}</div>


      <div className='ml-20 md:ml-0 '>
        <h1 className='fooH md:text-[20px] md:mb-[14px]'>ARTISTS</h1>
        {category.map((val, idx) => (
           <p key={idx} 
           className="fooP flex flex-col gap-3 md:gap-4 md:text-[20px] md:leading-normal cursor-pointer "
           >{val.cat}</p>
        ))}
      </div>

      <div>
        <h1 className='fooH md:text-[20px] md:mb-[14px]'>ART CATEGORY</h1>
        {artist.map((val, idx) => (
            
            <p key={idx} className="fooP md:text-[20px] flex flex-col gap-3 md:gap-4  md:leading-normal cursor-pointer ">{val.cat}</p>
        ))}
      </div>
      
      <div className='ml-20 md:ml-0 mt-10  md:mt-0'>
        <h1 className='fooH md:text-[20px] md:mb-[14px]'>ART CATEGORY</h1>
        {artcat.map((val, idx) => (
            <div className=''>
              <p key={idx}
            className="fooP flex flex-col gap-3 md:gap-4 md:text-[20px] md:leading-normal cursor-pointer  ">{val.cat}</p>
            </div>
        ))}
      </div>
     </footer>
    </>
  )
}

export default Footer