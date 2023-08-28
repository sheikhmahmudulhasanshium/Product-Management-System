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
if(pathname==='/login')setActiveItem('Login')
if(pathname==='/signin')setActiveItem('Signin')

},[])
return (
<div className='flex w-full gap-4 py-2 justify-evenly bg-slate-400 min-w-max'>
{/**Navbar */}

      {activeItem}
      <div className='space-x-4 text-red-600 hover:text-amber-300 hover:underline justify-evenly'>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Home'} route={'/'}></NavItem>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Login'} route={'/login'}></NavItem>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name={'Signin'} route={'/signin'}></NavItem>

       </div>
      
  </div>  
)
}

export default Navbar