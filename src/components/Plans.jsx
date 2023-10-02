import React from "react";
import single from "../assets/files/single.png";
import double from "../assets/files/double.png";
import triple from "../assets/files/triple.png";

function Plans() {
  return (
    <div className="max-w-[1100px] p-[20px] md:p-[10px] lg:grid grid-cols-3 mx-auto my-[40px] md:my[300px] md:mt-[120px] mt-[70px] gap-8">
      <div className="relative shadow-xl mb-[130px] hover:bg-gray-200 border border-[1px] duration-500 hover:scale-110 px-[20px] m-[20px] rounded text-center">
        <img
          src={single}
          className="w-[101px] absolute left-[36%] top-[-56px]"
          alt="first"
        />
        <h1 className="font-bold text-[25px] mt-[25px]">Web Development</h1>
        <br />
        <h1 className="font-bold text-[25px]">$149</h1>
        <br />
        <p className="font-bold text-[15px] py-4">Lorem ipsum dolor sit.</p>
        <hr />
        <p className="font-bold text-[15px]  py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium!
        </p>
        <hr />
        <p className="font-bold text-[15px]  py-4">
          Lorem ipsum dolor sit amet.
        </p>
        <hr />
        <button className="bg-green-500 text-black p-3 my-6 rounded font-[20px]">
          Start trial
        </button>
      </div>
      <div className=" relative shadow-xl m-[20px] mb-[130px] px-[40px] border border-[1px] hover:scale-110 duration-500  hover:bg-gray-200 rounded text-center ">
        <img
          src={double}
          className="w-[101px] absolute left-[36%] top-[-56px]"
          alt="second"
        />
        <h1 className="font-bold text-[25px] mt-[25px]">Digital Marketing</h1>
        <br />
        <h1 className="font-bold text-[25px]">$149</h1>
        <br />
        <p className="font-bold text-[15px] py-4">Lorem ipsum dolor sit.</p>
        <hr />
        <p className="font-bold text-[15px]  py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium!
        </p>
        <hr />
        <p className="font-bold text-[15px]  py-4">
          Lorem ipsum dolor sit amet.
        </p>
        <hr />
        <button className="bg-green-500 text-black p-3 my-6 rounded font-[20px]">
          Start trial
        </button>
      </div>
      <div className=" relative shadow-xl m-[20px] mb-12 px-[40px] border border-[1px] hover:scale-110 duration-500  hover:bg-gray-200 rounded text-center ">
        <img
          src={triple}
          className="w-[101px] absolute left-[36%] top-[-56px]"
          alt="third"
        />
        <h1 className="font-bold text-[25px] mt-[25px]">App Development</h1>
        <br />
        <h1 className="font-bold text-[25px]">$149</h1>
        <br />
        <p className="font-bold text-[15px] py-4">Lorem ipsum dolor sit.</p>
        <hr />
        <p className="font-bold text-[15px]  py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium!
        </p>
        <hr />
        <p className="font-bold text-[15px]  py-4">
          Lorem ipsum dolor sit amet.
        </p>
        <hr />
        <button className="bg-green-500 text-black p-3 my-6 rounded font-[20px]">
          Start trial
        </button>
      </div>
    </div>
  );
}

export default Plans;
