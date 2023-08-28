'use client'
import React, {useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'

export default function Searchbar(){
    const [searchkey,setSearchKey]=useState('')
    function inputHandler(event:any){
            setSearchKey(event.target.value)
        
    }
    const handleClear=(e:any)=>{
      //makes the value clear
     (document.getElementById('searchKey') as HTMLInputElement).value='';   
     //makes the searchKey result clear 
     setSearchKey(e.target.value)
    }
  return (
    <form className='flex flex-col justify-between mx-2 lg:mx-32 sm:mx-10'>
    <div className='flex gap-2 pl-3 my-3 text-xl bg-blue-300 rounded-2xl'>
        <BsSearch className='my-2'/>
        <input id='searchKey' type='text' name='searchkey' className='w-full pl-4 rounded-r-2xl focus:outline-none bg-emerald-300 hover:bg-slate-300 placeholder:text-orange-400' placeholder='Enter Keywords... ' onChange={inputHandler}/>
        {(searchkey!=='')&&<RxCross2 className='m-2 rounded-l-sm rounded-r-2xl hover:text-red-700' onClick={handleClear} type='button'/>}
    </div>
    {/**Search result */}
    <div className='flex justify-between px-4 mx-4 text-xl bg-red-100'>{searchkey} {(searchkey!=='')&&<p className='my-2 text-sm text-blue-900'>Press Enter</p>}</div>
</form>

  )
}


