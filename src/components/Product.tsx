import React, { useState } from 'react'
import Product_Card from './Product_Card'
const Product = () => {
    const [user,setUser]=useState('seller')
  return (
    <div className=' justify-center items-center p-2'>
        {(user==='customer')&&<div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 overflow-x-scroll gap-2 '>
        <Product_Card/>
        </div>}
        {(user==='seller')&&<div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 overflow-x-scroll gap-2 '>
            <Product_Card/>
        </div>}
        
    </div>
    
  )
}

export default Product
