import React, { FunctionComponent, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavItem:FunctionComponent<{
activeItem:string,
setActiveItem:Function,
name:string,
route:string
}>=({activeItem,name,route,setActiveItem})=>{
return(
activeItem!=name?(
<Link href={route}>
<span onClick={()=>setActiveItem(name)} className="hover:text-red-600 dark:text-white dark:hover:text-red-600">
{name}</span>
</Link>
):null
)
}
const Navbar = () => {
const [activeItem,setActiveItem]=useState('')
const {pathname}=useRouter()
React.useEffect(()=>{
if(pathname==='/')setActiveItem('Home')
if(pathname==='/products')setActiveItem('Products')
if(pathname==='/orders')setActiveItem('Orders')
if(pathname==='/users')setActiveItem('Users')
if(pathname==='/login')setActiveItem('Login')
},[])
return (
<div className='flex w-full gap-4 py-2 justify-evenly bg-slate-400 min-w-max'>
{/**Navbar */}

      {activeItem}
      <div className='space-x-4 text-red-600 hover:text-amber-300 hover:underline justify-evenly'>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Home'} route={'/'}></NavItem>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Products'} route={'/products'}></NavItem>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Orders'} route={'/orders'}></NavItem>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Users'} route={'/users'}></NavItem>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Login'} route={'/login'}></NavItem>
       </div>
      
  </div>  
)
}

export default Navbar