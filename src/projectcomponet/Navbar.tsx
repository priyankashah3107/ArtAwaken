// import React from 'react'

// const nav = [
//   {
//     id: 1,
//     name: "Art",
//   },
//   {
//     id: 2,
//     name: "Portraits",
//   },
//   {
//     id: 3,
//     name: "Painting"
//   },
//   {
//     id: 4,
//     name: "Photography"
//   },
//   {
//     id: 5,
//     name: "Scluptures"
//   },
//   {
//     id: 6,
//     name: "FashionDesign"
//   },
//   {
//     id: 7,
//     name: "Digital Art"
//   }
// ]
// const Navbar = () => {
//   return (
//     <>
//      <nav className='flex flex-row lg:justify-center lg:gap-[55px] items-center text-center mt-20 '>
//        {nav.map((item, idx) => (
//          <div key={idx} className=" rounded-[30px]">
//            <p className='nav w-32'>{item.name}</p>
//          </div>
//        ))}
//      </nav>
//     </>
//   )
// }

// export default Navbar



import React, { useState } from 'react';

const nav = [
  { id: 1, name: "Art" },
  { id: 2, name: "Portraits" },
  { id: 3, name: "Painting" },
  { id: 4, name: "Photography" },
  { id: 5, name: "Sculptures" },
  { id: 6, name: "Fashion Design" },
  { id: 7, name: "Digital Art" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between  p-4 pl-20  lg:pl-20 lg:p-10">
        {/* <div className=" flex flex-row lg:hidden">
          <p>Exhibitions</p>
          <p>Artist</p>
        </div> */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <nav className="hidden lg:flex lg:flex-row justify-center items-center lg:gap-20">
          {nav.map((item) => (
            <p key={item.id} className="nav lg:px-2.5">
              {item.name}
            </p>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-16 w-screen bg-white bg-opacity-20 backdrop-blur-lg shadow-lg border border-white border-opacity-10">
          {nav.map((item) => (
            <div key={item.id} className="p-4 border-b border-white border-opacity-20">
              <p className="nav">{item.name}</p>
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
