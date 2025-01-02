import React from 'react'
import '@/layout.css'

export default function Home(): React.ReactElement {
  return (
    <>
      <div className='flex flex-col justify-center'>
        <p className='font-bold pb-10 text' style={{ minWidth: '300px' }}>Hi, you've reached Noal</p>
        <div className='flex flex-row w-full justify-between'>
          <span>phone</span>
          <span>+1 250 538 7329</span>
        </div>
        <br />
        <div className='flex flex-row w-full justify-between'>
          <span>email</span>
          <span>noalbalint@gmail.com</span>
        </div>
      </div>
    </>
  )
}