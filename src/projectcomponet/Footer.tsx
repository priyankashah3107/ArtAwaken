"use client";
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

const Footer = () => {
  return (
     <>
     <footer className=' mt-32 pl-60  -mr-96 lg:-mr-0 gap-20 md:pl-64 md:gap-20 lg:p-20 lg:pl-32 grid grid-cols-2 lg:grid-cols-4 lg:gap-20'>
         <div className='mt-14'>
          {foo1.map((val, idx) => (
            <div key={idx} className='flex flex-col gap-6'>
              <h1 className='fooh font-rubik-wet-paint'>{val.name}</h1>
              <p className='foop font-cormorant '>{val.desc}</p>
            </div>
          ))}
         </div>

         <div className='flex flex-col gap-4 mt-16'>
         <h3 className='art font-inter '>ART CATEGORY</h3>
          {category.map((val, idx) => (
            <div key={idx} >
              <p className=' artd font-cormorant ' >{val.cat}</p>
            </div>
          ))}
         </div>
        

         <div className='flex flex-col gap-4 mt-16'>
         <h3 className='art font-inter'>ARTISTS</h3>
          {artist.map((val, idx) => (
            <div key={idx} >
              <p className=' artd font-cormorant' >{val.cat}</p>
            </div>
          ))}
         </div>

         <div className='flex flex-col gap-4 mt-16'>
         <h3 className='art font-inter'>About Us</h3>
          {artcat.map((val, idx) => (
            <div key={idx} >
              <p className=' artd font-cormorant' >{val.cat}</p>
            </div>
          ))}
         </div>
     </footer>
     </>
  )
}

export default Footer