import React from 'react';

function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] mx-auto  md:flex justify-between py-[40px]'>
            <div className='md:mx-auto m-2'>
              <h1 className='text-white font-bold md:text-[30px] text-[20px] '>Want to Learn Latest IT Skills?</h1>
              <span className='text-white'>Sign up to our newsletter and stay upto date.</span>
            </div>
            <div className='md:w-[35%] m-2'>
              <input type='text' className='p-3 mx-2 rounded w-full md:w-[250px] text-slate-600' placeholder='Email'  />
              <button className='bg-black text-white p-3 m-2 rounded w-[120px]'>Get Started</button>
              <br/>
              <p className='text-white'>
                We care about the protection of your data. Read our<br/>
                <a href="#" className='text-black'>Privacy policy.</a>
              </p>
            </div>

        </div>
        
    </div>
  )
}

export default NewsLetter;