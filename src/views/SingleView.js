import React from 'react'
import JokesHeader from '../components/JokesHeader'
import JokesFooter from '../components/JokesFooter'
import JokesBody from '../components/JokesBody'


export const SingleView = () => {
  return (
    <div className='bg-[#1982C4] h-screen'>
    <JokesHeader/>
    <JokesBody/>
    <div className='sticky bottom-0 mt-20'>
    <JokesFooter  />
    </div>
    </div>
  )
}
