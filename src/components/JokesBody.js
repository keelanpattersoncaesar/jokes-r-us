import React from "react";
import JokeCardFlip from "./JokeCardFlip";

const JokesBody = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row text-center list-none m-10 p-2 space-x-10 justify-center">
        <li className="border-2 shadow-md shadow hover:shadow-xl hover:scale-105 duration-500 bg-[#FFCA3A] shadow-gray-600 border-black p-2 rounded-xl">
          CategoryExample1
        </li>
        <li className="border-2 shadow-md shadow hover:shadow-xl hover:scale-105 duration-500 bg-[#FFCA3A] shadow-gray-600 border-black p-2 rounded-xl">
          CategoryExample2
        </li>
        <li className="border-2 shadow-md shadow hover:shadow-xl hover:scale-105 duration-500 bg-[#FFCA3A] shadow-gray-600 border-black p-2 rounded-xl">
          CategoryExample3
        </li>
        <li className="border-2 shadow-md shadow hover:shadow-xl hover:scale-105 duration-500 bg-[#FFCA3A] shadow-gray-600 border-black p-2 rounded-xl">
          CategoryExample4
        </li>
      </div>
      <div className="flex justify-center">
        <JokeCardFlip />
      </div>
      {/* <div className='flex rounded-xl bg-[#FFCA3A] shadow-xl shadow-gray-600 items-center border-2 border-black h-60 w-72 self-center mt-20'>
        <p className='m-auto'>THIS IS THE JOKE YALL!!!</p>
      </div> */}
    </div>
  );
};

export default JokesBody;
