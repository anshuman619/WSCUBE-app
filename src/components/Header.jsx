import React,{useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

export default function Header() {

    const [toggle,setToggle]=useState(false);

  return (
   <div className="bg-[#2699fb] p-4">
      <div className='max-w-[1240px]  py-[12px] mx-auto flex justify-between'>
         <div className='text-3xl font-bold text-white'>
            WSCube Tech.
         </div>

         {
            toggle? <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl block md:hidden my-2 ' /> 
            : <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl block md:hidden my-2 '/>
         }
         
         
         <ul className='hidden md:flex gap-10 items-center text-white'>
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
         </ul>

         {/* Responsive Menu */}
         <ul className={`md:hidden block w-full h-screen items-center text-white fixed bg-black  ${ toggle? 'left-[0]': 'left-[-100%]'} top-[96px] duration-300`}>
            <li className='p-5'>Home</li>
            <li className='p-5'>Company</li>
            <li className='p-5'>Resources</li>
            <li className='p-5'>About</li>
            <li className='p-5'>Contact</li>
         </ul>
      </div>
   </div>
  )
}
