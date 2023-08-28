import React from 'react'
import {FcSearch} from 'react-icons/fc'
import {GiSpiderMask} from 'react-icons/gi'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='sticky top-0 flex flex-col items-center justify-between w-full p-2 bg-red-200 min-w-screen'><a href="/">
    <div className="flex gap-2 ">
      <div className='text-2xl font-kaushan font-semibold italic text-green-800'><p>Product Management System</p></div>
        
    </div>
    </a>
  </div>
  )
}

export default Header
