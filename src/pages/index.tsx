import Header from '@/components/Header'
import Searchbar from '@/components/Searchbar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Seller'
import Product from '@/components/Product'

export default function Home() {
  return (
    <>
    
    <title>Product Management App</title>
        <main className="flex flex-col min-h-screen min-w-fit bg-slate-600 ">
        {/**Header */}
          <Header/>
        {/**Navbar */}
          <Navbar/>
        {/**Searchbar */}
          <Searchbar/>
        {/**Content */}
        <div className=' flex flex-col bg-slate-50 m-4 rounded-xl justify-center items-center'><Product/></div>
        <Footer/>
      </main>
    </>
  )
}
