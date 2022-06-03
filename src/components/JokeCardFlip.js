import { React, useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const JokeCardFlip = ({ programmingJokes }) => {
  const ref = useRef();

  return (
    <Flippy
      className="hover:scale-105 duration-500 shadow-2xl"
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
        {/* {programmingJokes.setup} <br /> */}
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
        {/* {programmingJokes.delivery} */}
      </BackSide>
    </Flippy>
  );
};

export default JokeCardFlip;
