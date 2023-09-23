import React from 'react'
import './App.css'

function App(): React.ReactElement {
  return (
    <>
    <p className='font-bold pb-10 text' style={{ minWidth: '300px' }}>Hi, you've reached Noal</p>
      <div className='flex flex-row w-full justify-between'>
        <span>phone</span>
        <span>+43 699 819 483 46</span>
      </div>
      <br />
      <div className='flex flex-row w-full justify-between'>
        <span>email</span>
        <span>noalbalint@gmail.com</span>
      </div>
    </>
  )
}

export default App
