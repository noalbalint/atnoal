import React from 'react';
import { analytics, logEvent } from "../../firebase";

function CreateEmail(): React.ReactElement {
  return (
    <>
      <div className='flex flex-col items-center content-center justify-center text-lg'>

        <ul className='w-[450px]'>
          <h1 className='text-2xl pb-4 text-left'>How to share a prewritten email link:</h1>
          <li className='text-left'>
            <span> 1. Generate a 'mailto' link with <a href="https://mailtolinkgenerator.com/" target='_blank'> mailto link generator</a></span>
          </li>
          <li className='text-left'>
            <span> 2. Paste the generated link to the end of this URL.</span>
            <br />
            <span className='pl-4'> Eg: <a href="noalbalint.com/send-email?[yourlink]" target='_blank'> noalbalint.com/send-email?mailto:asdf123</a></span>
          </li>
          <li className='text-left'>
            <span>3. Use <a href="https://tinyurl.com/app" target='_blank'> tinyurl </a> to shorten it (optional)</span>
          </li>
          <li className='text-left'>
            <span>4. Share!</span>
          </li>
        </ul>
      </div>
    </>
  )
}

declare global {
  interface Window { gtag: any; }
}

window.gtag = window.gtag || function(...args: any[]) { (window.gtag.q = window.gtag.q || []).push(args) };

const gtag = window.gtag;

export default function SendEmailWrapper(): React.ReactElement {
  const mailtoLink = window.location.href.match(/mailto(.*)/);
  const isMailtoLinkSet = mailtoLink !== null;

  logEvent(analytics, 'notification_received');

  if (isMailtoLinkSet) {
    window.location.href = mailtoLink[0];
    gtag('event', 'mail_link_opened')

    return (
      <div className='flex items-center justify-center text-lg'>
        <span> Opening email client... </span>
      </div>
    )
  } else {
    gtag('event', 'creating_mail_link')

    if (!window.location.href.includes('?')) {
      window.location.href += '?';
    }
    return CreateEmail();
  }
}