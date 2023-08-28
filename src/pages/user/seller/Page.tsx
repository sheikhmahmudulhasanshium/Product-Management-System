import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar/Seller'
import Searchbar from '@/components/Searchbar'
import React from 'react'

const SellerPage = () => {
  return (
    <>
      
        <title>Product Management App</title>
        

      <main className="flex flex-col min-h-screen min-w-fit bg-slate-600 ">
      {/**Header */}
        <Header/>
      {/**Navbar */}
        <Navbar/>
        <p className='text-white font-kaushan justify-center items-center flex p-2 font-light text-2xl'>Seller Page</p>
      {/**Searchbar */}
        <Searchbar/>
      {/**Content */}
      <Footer/>
    </main>
    </>
  )
}

export default SellerPage
