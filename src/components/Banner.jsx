import React from "react";
import Typed from "react-typed";

function Banner() {
  return (
    <div className="bg-[#2699fb] w-full py-[70px]">
      <div className="max-w-[1240px] mx-auto my-[40px] text-center font-bold">
        <div className="md:text-3xl text-xl font-bold md:mb-[20px]">
          Learn With US
        </div>
        <h2 className="text-white  md:text-[50px] md:mt-[4px] md:mb-[6px] text-3xl ">
          Grow With Us.
        </h2>
        <div className="md:text-[35px] text-[20px]  text-white ">
          Learn
          <Typed className="pl-4" strings={["Web Development","Digital Marketing","Ethical Hacking"]} typeSpeed={100}
           loop={true} backSpeed={50}
          />
         
           
        </div>
        <button className='bg-black text-white p-3 rounded font-[20px]'>Get Started</button>
      </div>
    </div>
  );
}

export default Banner;
