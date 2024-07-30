"use client"
import React from 'react'

const Button = ({}) => {
  return (
    <button className="rounded-2xl text-[16px] font-['Sansita_Swashed'] font-semibold border-2 border-solid border-black bg-white px-6 py-3  uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Join us
    </button>
  )
}

export default Button




interface ButtonTwoProps {
  value: string;
}

export const ButtonTwo: React.FC<ButtonTwoProps> = ({ value }) => {
  return (
    <div className="">
      <button className="lg:px-8  lg:py-2 text-[8px] lg:text-xl font-bold  lg:leading-loose rounded-xl lg:rounded-3xl  bg-white text-black w-20 h-6 lg:h-14  lg:w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        {value}
      </button>
    </div>
  );
};
