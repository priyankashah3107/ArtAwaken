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


// "use client"

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// // import "../index.css";

// interface NavLink {
//   id: number;
//   name: string;
//   href: string;
// }

// const navLinks: NavLink[] = [
//   {
//     id: 1,
//     name: "Art",
//     href: "#" 
//   },
//   {
//     id: 2,
//     name: "Portraits",
//     href: "#" 
//   },
//   {
//     id: 3,
//     name: "Painting",
//     href: "#" 
//   },
//   {
//     id: 4,
//     name: "Photography",
//     href: "#" 
//   },
//   {
//     id: 5,
//     name: "Scluptures",
//     href: "#" 
//   },
//   {
//     id: 6,
//     name: "FashionDesign",
//     href: "#" 
//   },
//   {
//     id: 7,
//     name: "Digital Art",
//     href: "#" 
//   }
// ];

// const NavBar: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className=" w-screen text-black  bg-transparent lg:pl-20">
//       <div className='container mx-auto flex flex-row items-center justify-between p-4'>
//         <div className="flex flex-row items-center">
//           {/* <Image src={"/logo.png"} alt='img' width={22} height={28} className='w-52 h-6 ' /> */}
//           <h1 className="text-xl font-normal lg:text-3xl lg:font-bold font-['DM Sans']">
//             <span className="text-[#ff54e8]">Art</span>Awaken
//           </h1>
//         </div>
//         <div className="hidden lg:flex flex-row gap-4 mr-12">
//           {navLinks.map((data) => (
//             <div key={data.id}>
//               <Link href={data.href} className='links'> {data.name} </Link>
//             </div>
//           ))}
//         </div>
//         <div className="lg:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {menuOpen && (
//         <div className="lg:hidden flex flex-col items-center bg-[#606677] bg-opacity-75 p-4  w-full">
//           {navLinks.map((data) => (
//             <Link key={data.id} href={data.href} className="links py-2"> {data.name} </Link>
//           ))}
//         </div>

//       )}
//     </nav>
//   );
// };

// export default NavBar;