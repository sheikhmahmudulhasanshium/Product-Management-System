import React, { useState, FunctionComponent } from 'react'
import Image from 'next/image'
import {AiFillEdit,AiFillPhone,AiOutlineShoppingCart} from 'react-icons/ai'
import { IProduct } from '@/type'
const Product_Card: FunctionComponent<{product:IProduct}> = ({product:{id,imageSrc,productName,description,price,prevPrice,discount,manuDate,expDate,quality,unitsAvailable,supplierContact}}) => {
const [user,setUser]=useState('admin')

const renderSellerOrAdminView=()=>(
        <div className="flex flex-col justify-center items-center   bg-blue-800 rounded-2xl p-2 " key={id}>
            <div className='bg-blue-900 px-2  text-yellow-300 absolute -mt-72 ml-56 rounded-lg' >
            {(unitsAvailable!==0 && unitsAvailable <= 10) ? 'Low' : unitsAvailable === 0 ? 'Sold' : 'Available'}
            </div>
            <Image className=' rounded-none' src={imageSrc} alt="product-icon" height={200} width={270} /> 
            
            
            <div className='flex flex-col   text-center text-white rounded-b-2xl bg-slate-400'>
                <div className='flex justify-center gap-2'><p className='text-base font-bold font-kaushan'>{productName}</p>{<div className='w-2 h-2 p-1 text-black hover:text-white'><AiFillEdit /></div>}</div>
                <div className=' items-center justify-center space-x-1 text-sm'>
                    <div className='flex flex-col space-x-2 justify-center items-center'><span className='px-1 '>{description}</span>{<div className='w-2 h-2  text-black hover:text-white'><AiFillEdit /></div>}</div>
                    <div className='flex flex-col '>
                        <div className='flex justify-center gap-2'><span className='text-yellow-400 font-bold text-lg'>$ {price}</span>{<div className='w-2 h-2 p-1 text-black hover:text-white'><AiFillEdit /></div>}</div>
                        <div className='flex justify-center items-center gap-4 pb-2'>
                            <span className='text-gray-700 line-through'>{prevPrice}</span>
                            <span className='bg-red-900 px-1'>{discount}% Off</span>
                        </div>
                        <div>
                            <div className='flex justify-center gap-1'><p>Manufacture Date: {manuDate}</p>{<div className='w-2 h-2 p-1 text-black hover:text-white'><AiFillEdit /></div>}</div>
                            <div className='flex justify-center gap-1'><p>Expiry Date: {expDate}</p>{<div className='w-2 h-2 p-1 text-black hover:text-white'><AiFillEdit /></div>}</div>
                            <div className='flex justify-center gap-1'><p>Product Quality: {quality}</p>{<div className='w-2 h-2 p-1 text-black hover:text-white'><AiFillEdit /></div>}</div>
                        </div>
                        
                    </div>
                </div>
                <button className='flex bg-blue-700 justify-center items-center rounded-b-xl hover:bg-green-400 gap-2'>Contact Supplier {supplierContact} <AiFillPhone/></button>

            </div>
            <div className='flex justify-between items-stretch space-x-2 pt-2'>
                <button className='bg-slate-200 text-sm px-2 hover:bg-orange-400'>Add To Inventory</button>
                <button className=' text-sm px-2 bg-red-500 hover:bg-red-900 hover:text-yellow-100'>Cancel</button>
            </div>
        </div>
        
);

const renderCustomerView=()=>(
    <div className="flex flex-col justify-center items-center   bg-blue-800 rounded-2xl p-2 " key={id}>
    <div className='bg-blue-900 px-2  text-yellow-300 absolute -mt-72 ml-56 rounded-lg'>
      Sold
    </div>
    <Image className=' rounded-none' src="/Sample_Pic.png" alt="product-icon" height={200} width={270}/> 
    
    
    <div className='flex flex-col   text-center text-white rounded-b-2xl bg-slate-400'>
        <div className='flex justify-center gap-2'><p className='text-base font-bold font-kaushan'>{productName}</p></div>
        <div className=' items-center justify-center space-x-1 text-sm'>
            <span className='px-1 '>{description}</span>
            <div className='flex flex-col '>
                <span className='text-yellow-400 font-bold text-lg'>{price}</span>
                <div className='flex justify-center items-center gap-4 pb-2'>
                    <span className='text-gray-700 line-through'>{prevPrice}</span>
                    <span className='bg-red-900 px-1'>{discount}% Off</span>
                </div>
                
            </div>
                
        </div>
        <button className='flex gap-2 justify-center items-center bg-blue-300 rounded-b-lg hover:bg-blue-900 hover:text-orange-400'>Add to Cart <AiOutlineShoppingCart/></button>

    </div>
</div>

    
);
  
  return (
    <>
    {user === 'seller' || user === 'admin' ? renderSellerOrAdminView() : renderCustomerView()}
        
    </>
      
  )
}

export default Product_Card
