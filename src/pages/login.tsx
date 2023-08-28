import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiSolidHide, BiSolidShow } from 'react-icons/bi'
import {GrCircleInformation} from 'react-icons/gr'
const Login = () => {
    const [values,setValues]=useState(
        {
            password: "",
            showPassword:false,
        }
    )
    const handleClickShowPassword=()=>{
        setValues({...values,showPassword:!values.showPassword})
    }
    const handleMouseDownPassword=(event: { preventDefault: () => void })=>{
        event.preventDefault()
    }
    const handlePasswordChange=(prop: any)=>(event: { target: { value: any } })=>{
        setValues({...values,[prop]:event.target.value})
    }
    function handleLogin(props: any){
        console.log("Loggedin Successfully")
    }
    const handleValidation=()=>{
       
    }
    return (
    <div className='flex flex-col justify-center items-center  h-screen bg-gradient-to-r from-neutral-900 to-shiumcustom '>
        <title>Login Page</title>
      <form action="" onSubmit={handleLogin}>
          <div className='flex flex-col bg-white p-4 rounded-2xl justify-center items-center py-2'>
            <Link href={'/'}><Image src='/Chorki-made-by-shium.gif' width={200} height={200} alt='logo' className='ml-6 pl-6'  quality='100' priority={true}></Image></Link>
            <div className='flex flex-col justify-center items-center gap-2'>
                <p className='font-kaushan text-xl'>Product Management System</p>
                <p className='text-xs pl-24'>-Here Slogan Will Be Placed</p>
            </div>
            <p className='p-3 text-xl font-kaushan italic'>Log-In Page</p>
            <div className='flex flex-col gap-2'>
                <input type="text" name="uname" id="uname" className=' border-stone-600 rounded-lg bg-slate-300 p-2 w-96' placeholder='Username/Email'/>
                    <span className='text-xs text-red-700'>* uname error </span>
                <div className='flex'>
                    <input type={values.showPassword?"text":"password"} name="password" id="password"  className='  border-stone-600 rounded-lg bg-slate-300 p-2 w-96' placeholder='Password' onChange={handlePasswordChange} />
                    <div onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} className='text-blue-900 pt-3' style={{marginLeft:'-1.5rem'}}>{values.showPassword?<BiSolidShow/>:<BiSolidHide/>}</div>
                </div>
                <span className='text-xs text-red-700'>* password error</span>

            </div>
            <div className='flex pt-2 gap-2'>
                <input type="checkbox" name="" id="" className='bg-green-900'/>
                <span className=''>Remember Me</span>

            </div> 
           
            <button type='submit' className=' bg-blue-800 hover:bg-blue-950 w-96 my-4 py-1 text-black hover:text-yellow-100' >Log In</button>
            <span className='text-xs text-red-700'>* log-in error</span>
            <div className='space-x-6'>
                <Link href={'/forgot'} className='text-blue-400 hover:text-blue-800'>Forgot Password?</Link>
                <Link href={'/signin'} className='text-blue-400 hover:text-blue-800'>Not Registered?</Link>
            </div>
        </div>
     </form>
    </div>
  )
}

export default Login
