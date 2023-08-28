import React, { useState } from 'react'
import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import {FaFacebook, FaLinkedin} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import Link from 'next/link'
const Footer = () => {
  const [showfooter,setShowFooter]=useState(true)
  function toggleShow(){
    showfooter?setShowFooter(false):setShowFooter(true)
    
  }
  let buttonIcon=(showfooter?<BsChevronDoubleDown className='w-8 h-4 font-extrabold hover:text-yellow-200'/>:<BsChevronDoubleUp className='w-8 h-4 font-extrabold hover:text-yellow-200'/>)
  return (
 
<footer className="sticky bottom-0 flex flex-col items-center w-full py-1 font-medium text-white bg-green-900 min-w-max" >
    {/**Show-hide Button */}
    <div className='flex justify-center pt-1 hover:bg-green-600 ' onClick={toggleShow}><hr className='w-12 h-1 bg-white' />{buttonIcon}<hr className='w-12 h-1 bg-white'/></div>
    {(showfooter)&&<div className='flex flex-col items-center justify-evenly'>  
      <div className='py-4 text-2xl'><img src="./next.svg" alt="logo" className='w-20 '/></div>
      <div className='flex w-full gap-4 pt-2 justify-evenly'>
          <Link className='hover:underline hover:text-yellow-700' href={'/about'}>About</Link>
          <Link className='hover:underline hover:text-yellow-700' href={'/privacy_policy'}>Privacy Policy</Link>
          <Link className='hover:underline hover:text-yellow-700'href={'/licensing'}>Licensing</Link>
          <Link className='hover:underline hover:text-yellow-700' href={'/contacts'}>Contact</Link>
      </div>
      <hr className="w-8/12 h-1 mt-6 border-0 bg-slate-900"></hr>

      <p>&copy; 2023 Shium&trade;. All right Reseseved.</p>
      <div className='flex w-full pt-2 justify-evenly'><FaFacebook className='hover:text-blue-700'/><FaLinkedin className='hover:text-blue-700'/><BiLogoGmail className='hover:text-red-700'/></div>
    </div>}
</footer>


  )
}

export default Footer
