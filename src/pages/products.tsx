import React, { useState } from 'react'
import Product_Card from '../components/Product_Card'
import { products } from '@/data/product'
const Product = () => {
    const [user,setUser]=useState('customer')
  return (<div className=' justify-center items-center bg-slate-800 p-2 '>
    
    <div className=' justify-center items-center '>
        {(user==='customer')&&<div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 overflow-x-scroll gap-2 '>
        {products.map((product)=>
          (<Product_Card product={product}/>)
          )}
        </div>}
        {(user==='seller')&&<div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 overflow-x-scroll gap-2 '>
        {products.map((product)=>
          (<Product_Card product={product}/>)
          )}        
          </div>}
        
    </div>
    </div>
  )
}

export default Product
