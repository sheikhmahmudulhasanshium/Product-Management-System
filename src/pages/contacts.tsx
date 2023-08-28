import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const contacts = () => {
    function handleChange(){

    }
    function handleSubmit(){
        }
    const validateForm = () => {
        
    }
       
  return (
    <div className='bg-green-400 '>
        <Header/>
        {/*<Navbar/>*/}
        <div className='flex flex-col items-center justify-start gap-2 p-2 h-screen '>
            <p className='text-2xl font-kaushan text-shiumcustom'>Contact Us</p>
            <div className='w-full   bg-yellow-200 rounded-lg  '>
                <form onSubmit={handleSubmit} className=' items-center justify-center  flex flex-col gap-2 p-4 m-4'>
                    <input type="text" name='name' placeholder='Your Name ...'  onChange={handleChange}  className='p-2 rounded-xl w-full'/>
                    {}
                    <input type="text" name='email' placeholder='Your Email ...'  onChange={handleChange}  className='p-2 rounded-xl w-full'/>
                    {}
                    <textarea name="message" id="" placeholder='Your Feedback ...' className='p-2 rounded-xl w-full'></textarea>
                    {}
                    <button type='submit' className='bg-slate-400 p-2 rounded-md '>Submit</button>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  
  )
}

export default contacts
