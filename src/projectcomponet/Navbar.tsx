import React from 'react'

const nav = [
  {
    id: 1,
    name: "Art",
  },
  {
    id: 2,
    name: "Portraits",
  },
  {
    id: 3,
    name: "Painting"
  },
  {
    id: 4,
    name: "Photography"
  },
  {
    id: 5,
    name: "Scluptures"
  },
  {
    id: 6,
    name: "FashionDesign"
  },
  {
    id: 7,
    name: "Digital Art"
  }
]
const Navbar = () => {
  return (
    <>
     <nav className='flex flex-row lg:justify-center lg:gap-[55px] items-center text-center mt-20 '>
       {nav.map((item, idx) => (
         <div key={idx} className=" rounded-[30px]">
           <p className='nav w-32'>{item.name}</p>
         </div>
       ))}
     </nav>
    </>
  )
}

export default Navbar

