import React, { useState } from 'react'
import Image from 'next/image'
import {AiFillEdit,AiFillPhone,AiOutlineShoppingCart} from 'react-icons/ai'
const Product_Card = () => {
const [user,setUser]=useState('admin')

  
  return (
    <div>
    {(user==='seller'||user==='admin')&&
        <div className="flex flex-col justify-center items-center   bg-blue-800 rounded-2xl p-2 ">
            <div className='bg-blue-900 px-2  text-yellow-300 absolute -mt-72 ml-56 rounded-lg'>
              Low
            </div>
            <Image className=' rounded-none' src="/Sample_Pic.png" alt="product-icon" height={200} width={280}/> 
            
            
            <div className='flex flex-col   text-center text-white rounded-b-2xl bg-slate-400'>
                <div className='flex justify-center gap-2'><p className='text-base font-bold font-kaushan'>Product Name</p>{<div className='w-2 h-2 p-1 text-black hover:text-white'><AiFillEdit /></div>}</div>
                <div className=' items-center justify-center space-x-1 text-sm'>
                    <div className='flex flex-col space-x-2 justify-center items-center'><span className='px-1 '>This place will contain the product decription</span>{<div className='w-2 h-2  text-black hover:text-white'><AiFillEdit /></div>}</div>
                    <div className='flex flex-col '>
                        <div className='flex justify-center gap-2'><span className='text-yellow-400 font-bold text-lg'>$ 00.00</span>{<div className='w-2 h-2 p-1 text-black hover:text-white'><AiFillEdit /></div>}</div>
                        <div className='flex justify-center items-center gap-4 pb-2'>
                            <span className='text-gray-700 line-through'>Previous Price</span>
                            <span className='bg-red-900 px-1'>00% Off</span>
                        </div>
                        <div>
                            <div className='flex justify-center gap-1'><p>Manufacture Date: 00/00/0000</p>{<div className='w-2 h-2 p-1 text-black hover:text-white'><AiFillEdit /></div>}</div>
                            <div className='flex justify-center gap-1'><p>Expiry Date: 00/00/0000</p>{<div className='w-2 h-2 p-1 text-black hover:text-white'><AiFillEdit /></div>}</div>
                            <div className='flex justify-center gap-1'><p>Product Quality: Good</p>{<div className='w-2 h-2 p-1 text-black hover:text-white'><AiFillEdit /></div>}</div>
                        </div>
                        
                    </div>
                </div>
                <button className='flex bg-blue-700 justify-center items-center rounded-b-xl hover:bg-green-400 gap-2'>Contact Supplier <AiFillPhone/></button>

            </div>
            <div className='flex justify-between items-stretch space-x-2 pt-2'>
                <button className='bg-slate-200 text-sm px-2 hover:bg-orange-400'>Add To Inventory</button>
                <button className=' text-sm px-2 bg-red-500 hover:bg-red-900 hover:text-yellow-100'>Cancel</button>
            </div>
        </div>
        }
    {(user==='customer')&&
    <div className="flex flex-col justify-center items-center   bg-blue-800 rounded-2xl p-2 ">
    <div className='bg-blue-900 px-2  text-yellow-300 absolute -mt-72 ml-56 rounded-lg'>
      Sold
    </div>
    <Image className=' rounded-none' src="/Sample_Pic.png" alt="product-icon" height={200} width={280}/> 
    
    
    <div className='flex flex-col   text-center text-white rounded-b-2xl bg-slate-400'>
        <div className='flex justify-center gap-2'><p className='text-base font-bold font-kaushan'>Product Name</p></div>
        <div className=' items-center justify-center space-x-1 text-sm'>
            <span className='px-1 '>This place will contain the product decription</span>
            <div className='flex flex-col '>
                <span className='text-yellow-400 font-bold text-lg'>$ 00.00</span>
                <div className='flex justify-center items-center gap-4 pb-2'>
                    <span className='text-gray-700 line-through'>Previous Price</span>
                    <span className='bg-red-900 px-1'>00% Off</span>
                </div>
                
            </div>
                
        </div>
        <button className='flex gap-2 justify-center items-center bg-blue-300 rounded-b-lg hover:bg-blue-900 hover:text-orange-400'>Add to Cart <AiOutlineShoppingCart/></button>

    </div>
</div>

    }    
        
    </div>
      
  )
}

export default Product_Card
