import { React, useRef } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const JokeCardFlip = () => {
    const ref = useRef();

  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '300px', height: '350px' }} /// these are optional style, it is not necessary
  >
    <FrontSide className='flex rounded-xl flex-col items-center justify-center' style={{ backgroundColor: '#FFCA3A'}} >
      What do you call a moon that's gone crazy? <br />
      <div
      className='' 
      onClick={() => { ref.current.toggle(); }} >
    </div></FrontSide>
    <BackSide className='flex items-center justify-center rounded-xl' style={{ backgroundColor: '#FFDE85'}}>
      A lunatic 🌝
    </BackSide>
  </Flippy>
  )
}

export default JokeCardFlip