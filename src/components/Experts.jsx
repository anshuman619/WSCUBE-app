import React from 'react';
import laptop from "../assets/files/laptop.jpg";

function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto md:grid grid-cols-2'>
           <div className='w-[80%] col-span-1'>
              <img src={laptop} alt='' />
           </div>
           <div className='col-span-1 flex flex-col justify-center'  >
             <h1 className='text-[#00df9a] font-bold my-2'>Learn From Experts</h1>
             <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error officia rem provident consequuntur corrupti maiores illo, rerum totam similique modi, repellat animi maxime magnam doloribus dolores omnis molestiae ullam.</p>
             <button className='bg-black text-white p-3 rounded w-[30%]'>Get Started</button>
           </div>
    </div>
  )
}

export default Experts;