import React from 'react'
import JokesHeader from '../components/JokesHeader'
import JokesBody from '../components/JokesBody'


export const SingleView = () => {
  return (
    <div className='bg-[#1982C4] h-screen'>
    <JokesHeader/>
    <JokesBody/>
    </div>
  )
}
