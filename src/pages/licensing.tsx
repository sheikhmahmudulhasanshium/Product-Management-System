import Footer from '@/components/Footer'
import Header from '@/components/Header'
//import Navbar from '@/components/Navbar'
import React from 'react'

const licensing = () => {
  return (
    <div className='bg-green-200 '>
      <Header/>
      {/*<Navbar/>*/}
      <h1 className='p-2 text-2xl font-kaushan'>Licensing Information</h1>
        <div className='h-screen p-2 '>
          <p>
            Add your licensing information here. This can include details about the
            type of license, terms of use, restrictions, and any other relevant
            information regarding the usage of your software or product.
      </p>
      <p>
        Remember to consult with legal experts to ensure that your licensing
        information is compliant with applicable laws and regulations.
      </p>
        </div>
      <Footer/>
    </div>
  )
}

export default licensing
