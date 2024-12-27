import React from 'react'
import Image from "next/image";

export const RoundButton = () => {
  return (
    <>
      <button className='bg-[#383838] rounded-[50px] w-[200px] h-[60px] flex justify-center gap-3 items-center text-white'>
        <Image
          src="/images/icon-create.png"
          alt="icon"
          width={25}
          height={25}
          className="w-6"
        />
        <span>ボタン</span>
      </button>
    </>
  )
}
