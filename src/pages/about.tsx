import Footer from '@/components/Footer'
import Header from '@/components/Header'
//import Navbar from '@/components/Navbar'
import React from 'react'

const about = () => {
  return (
    <div className='bg-green-400 '>
        <Header/>
        {/*<Navbar/>*/}
        <div className='flex flex-col items-center justify-center gap-2 p-2'>
            <p className='text-2xl font-kaushan text-shiumcustom'>About Page</p>
            <div className='w-full h-screen bg-yellow-200 rounded-lg'>Content</div>
        </div>
        <Footer/>
    </div>
  )
}

export default about
