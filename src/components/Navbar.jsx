import tayo from '../assets/tayo.jpg';
import { navItems } from '../constants';
import {Menu, X} from 'lucide-react';
import { useState } from 'react';


const Navbar = () => {
   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
   const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen)
   }
  return (
    <nav className="sticky top-0 py-4 z-50 backdrop-blur-lg border-b border-neutral-700/80">
       <div className="container mx-auto p-4 relative text-sm">
          <div className="flex justify-between items-center">
             <div className="flex items-center flex-shrink-0">
                <img src={tayo} alt='Logo' className='w-10 h-10 mr-2 rounded-full '/>
                <span className='text-xl tracking-tight'>Omotayo</span>
             </div>
             <ul className='hidden lg:flex ml-14 space-x-12'>
                {navItems.map((item, index) => (
                  <li key={index}>
                     <a href={item.href} className='hover:text-orange-500 '>{item.label}</a>
                  </li>
                ))}
             </ul>
             <div className='hidden lg:flex justify-center space-x-12 items-center'>
                <a href='#' className='py-2 px-3 border rounded-md hover:bg-orange-900 '>Sign In</a>
                <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</a>
             </div>
             <div className='lg:hidden md:flex flex-col justify-start'>
                <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
             </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
               <ul>
                  {navItems.map((item, index) =>(
                     <li key={index} className='py-4'>
                        <a href={item.href}>{item.label}</a>
                     </li>
                  ))}
               </ul>
               <div className="flex space-x-12">
                  <a href='#' className='px-3 py-2 border rounded-md hover:bg-orange-900 '>Sign In</a>
                  <a href='#' className='px-3 py-2 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an account</a>
               </div>
            </div>
          )}
       </div>
    </nav>
  )
}

export default Navbar
