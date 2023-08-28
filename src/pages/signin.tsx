import { Users } from '@/data/users';
import { IUser } from '@/type';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
const Signin = () => {
    
    
return (
<div className='flex flex-col justify-center items-center   bg-gradient-to-r from-green-900 to-shiumcustom p-4'>
    <title>Signin Page</title>
    <form method='post'>
        <div className='flex flex-col bg-white p-4 rounded-2xl justify-center items-center py-2'>
        <Link href={'/'}><Image src='/Chorki-made-by-shium.gif' width={200} height={200} alt='Signo' className='ml-6 pl-6'  quality='100' priority={true}></Image></Link>
        <div className='flex flex-col justify-center items-center gap-2'>
            <p className='font-kaushan text-xl'>Product Management System</p>
            <p className='text-xs pl-24'>-Here Slogan Will Be Placed</p>
        </div>
        <p className='p-3 text-2xl font-kaushan italic'>Sign-In Page</p>
        <div className='flex flex-col gap-2'>
            <input type="text" name="uname" id="uname" className=' border-stone-600 rounded-lg bg-slate-300 p-2 w-96' placeholder='Username'/>
            <span className='text-xs text-red-700'>* uname error</span>
            <input type="text" name="email" id="email" className=' border-stone-600 rounded-lg bg-slate-300 p-2 w-96' placeholder='Email'/>
            <span className='text-xs text-red-700'>* email error</span>
            <input type="text" name='phone' id="phone" className=' border-stone-600 rounded-lg bg-slate-300 p-2 w-96' placeholder='Phone '/>
            <span className='text-xs text-red-700'>* phone error</span>
            <input type="text" name='address' id="address" className=' border-stone-600 rounded-lg bg-slate-300 p-2 w-96' placeholder='Address'/>
            <span className='text-xs text-slate-700'>* optional</span>
            <input type='text' name="password" id="password"  className='  border-stone-600 rounded-lg bg-slate-300 p-2 w-96' placeholder='Password'  />
            <span className='text-xs text-red-700'>* password error</span>
            <input type='text' name="cpassword" id="cpassword"  className='  border-stone-600 rounded-lg bg-slate-300 p-2 w-96' placeholder='Confirm Password'  />
            <span className='text-xs text-red-700'>* cpassword error</span>
        </div>
        <div className='flex gap-2 p-2'><p>Already have an account?</p><Link className='text-blue-700 hover:text-sky-900 hover:underline' href={'/login'}>Log-in</Link></div>
        <button type='submit' className=' bg-blue-800 hover:bg-blue-950 w-96 my-4 py-1 text-black hover:text-yellow-100' >Sign In</button>
        <span className='text-xs text-red-700'>* sign-in error</span>
        <div className='flex gap-2'>
            <input type="checkbox" name="" id="" className='bg-green-900 pb-2'/>
            <span className=''>I agree with the <Link href={'/privacy_policy'} className='text-blue-700 hover:text-blue-950 hover:underline'>terms and condtion</Link></span>
        </div> 
        <span className='text-xs text-red-700'>* checkbox error</span>

    </div>
    </form>
</div>
)
}

export default Signin

{/**
const validateUser = (user: IUser) => {
    // Validate the username.
    if (user.username.length < 5) {
        throw new Error('Username must be at least 5 characters long.');
    }
    
    // Validate the email address.
    if (!/\S+@\S+\.\S+/.test(user.email)) {
        throw new Error('Invalid email address.');
    }
    
    // Validate the phone number.
    if (!/^\d{11}$/.test(user.phone)) {
        throw new Error('Invalid phone number.');
    }
    
    // Validate the address.
    if (user.address.length < 10) {
        throw new Error('Address must be at least 10 characters long.');
    }
    
    // Validate the password.
    if (user.password.length < 8) {
        throw new Error('Password must be at least 8 characters long.');
    }
    
    // Validate the confirmation password.
    if (user.password !== user.cpassword) {
        throw new Error('Passwords do not match.');
    }
    
    // Validate the checkbox.
    if (!user.checkbox) {
        throw new Error('Please agree to the terms and conditions.');
    }
    
    // Validate the category.
    if (!['seller', 'admin', 'customer', 'employee', 'other'].includes(user.category)) {
        throw new Error('Invalid category.');
    }
    }; 

*/}
