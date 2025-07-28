import React from 'react'
import '@/layout.css'

export default function Home(): React.ReactElement {
  return (
    <>
      <div className='flex flex-col justify-center'>
        <p className='font-bold pb-10 text' style={{ minWidth: '300px' }}>
          Hi, you've reached Noal
        </p>
        <div className='flex flex-row w-full justify-between'>
          <span>phone</span>
          <span>+1 672 381 1499</span>
        </div>
        <div className='flex flex-row w-full justify-between py-4'>
          <span>email</span>
          <span>noalbalint@gmail.com</span>
        </div>
        <div className='flex flex-row w-full justify-between'>
          <span>social</span>
          <a href='http://instagram.com/noal.balint'>@noal.balint</a>
        </div>
        <div className='pb-10' />
        <Button />
      </div>
    </>
  )
}

export function Button(): React.ReactElement {
  return (
    <>
      <div>
        <a
          className='
          text-black hover:text-black hover:bg-slate-200
          border-solid border-2 border-black rounded-lg
          mt-12 p-2
          '
          href='http://linkmail.noal.dev'
        >
          open linkmail
        </a>
      </div>
    </>
  )
}
