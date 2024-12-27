import React from 'react'
import Image from "next/image";

export const Pagenation = () => {
  return (
    <>
      <ul className='flex justify-center items-center gap-4 mx-4'>
        <li className='pre font-bold mr-9'>
          <a className='flex justify-between items-center w-full' href="">
            <Image
              src="/images/icon-left.png"
              alt="arrow"
              width={20}
              height={20}
              className="w-5 sm:w-5 mr-3"
            />
            {/* <span>Previous Page</span> */}
          </a>
        </li>
        <li className='current text-white text-base rounded-full border border-solid border-[#000] bg-black flex justify-center items-center w-10 h-10'>1</li>
        <li className='text-black text-base rounded-full border border-solid border-[#000] bg-white'><a className='flex justify-center items-center w-10 h-10' href="">2</a></li>
        <li className='text-black text-base rounded-full border border-solid border-[#000] bg-white'><a className='flex justify-center items-center w-10 h-10' href="">3</a></li>
        <li className='next font-bold ml-9'>
          <a className='flex justify-between items-center w-full' href="">
            {/* <span>Next Page</span> */}
            <Image
              src="/images/icon-right.png"
              alt="arrow"
              width={20}
              height={20}
              className="w-5 sm:w-5 ml-3"
            />
          </a>
        </li>
      </ul>
    </>
  )
}
