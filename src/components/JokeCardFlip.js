import { React, useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const JokeCardFlip = ({ jokes }) => {
  const ref = useRef();

  return (
    <Flippy
      className="hover:scale-105 duration:500 shadow-2xl "
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: "300px", height: "350px" }} /// these are optional style, it is not necessary
    >
      <FrontSide
        className="flex rounded-xl flex-col items-center justify-center border-2 border-black"
        style={{ backgroundColor: "#FFCA3A" }}
      >
        <div className='bg-white shadow-sm shadow-black rounded-full border-2 h-[150px] w-[250px] flex items-center text-center' >
        { jokes ? 
        jokes.setup  : "Select a category to generate a joke" }
        </div>
        <div
          className=""
          onClick={() => {
            ref.current.toggle();
          }}
        ></div>
      </FrontSide>
      
      <BackSide
        className="flex items-center justify-center rounded-xl border-2 border-black"
        style={{ backgroundColor: "#FFDE85" }}
      >
        <div className='bg-white shadow-sm shadow-black rounded-full border-2 h-[150px] w-[250px] flex items-center text-center justify-center'>
        {jokes && jokes.delivery}    
        </div>
      </BackSide>
    </Flippy>
  );
};

export default JokeCardFlip;
