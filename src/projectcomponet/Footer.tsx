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
    <div className='  mt-32 ml-60 md:ml-44 lg:p-20 '>
      <div className='grid  grid-cols-2 lg:grid-cols-4 gap-20'>
        {foo1.map((val, idx) => (
          <div key={idx}>
            <h1>{val.name}</h1>
            <p>{val.desc}</p>
          </div>
        ))}

        <div>
          <h1>ART CATEGORY</h1>
          {category.map((val, idx) => (
             <p key={idx}>{val.cat}</p>
          ))}
        </div>

        <div>
          <h1>ARTISTS</h1>
          {artist.map((val, idx) => (
             <p key={idx}>{val.cat}</p>
          ))}
        </div>

        <div>
          <h1>ART CATEGORY</h1>
          {artcat.map((val, idx) => (
             <p key={idx}>{val.cat}</p>
          ))}
        </div>

      </div>
    </div>
    </>
  )
}

export default Footer