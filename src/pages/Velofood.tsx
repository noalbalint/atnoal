import React from 'react'
import noal from '@/assets/noal.jpg'
import MailOutline from '@mui/icons-material/MailOutline';
import PhoneIphone from '@mui/icons-material/PhoneIphone';

export default function Velofood (): React.ReactElement {
  return (
    <>
      {/* Layout for resume */}
      <div className='w-2/3 flex align-center p-6'>
        <div className='flex flex-col items-center w-1/3 p-6'>
          {/* Photo */}
          <img src={noal} className='w-82 pb-6 rounded-lg' alt="the applicant" />
          {/* Phone */}
          <div className="inline-flex w-full pb-2 px-2">
            <PhoneIphone className='w-1/6'/>
            <span className='w-full text-right'>+43 699 819 483 46</span>
          </div>
          {/* Email */}
          <div className="inline-flex w-full pb-2 px-2">
            <MailOutline className='w-1/6'/>
            <span className='w-full text-right'>noalbalint@gmail.com</span>
          </div>
        </div>
        <div className='flex flex-col w-2/3 p-6'>
          <div>Velofood</div>
          <div>Velofood</div>
          <div>Velofood</div>
        </div>
      </div>
    </>
  )
}
