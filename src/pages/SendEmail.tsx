import React, { useEffect, useState } from 'react';

export default function SendEmail(): React.ReactElement {
  const [text, setText] = useState('Opening email client...');

  useEffect(() => {
    const mailtoLink = window.location.href.match(/mailto(.*)/);

    if (mailtoLink !== null) {
      console.log(mailtoLink[0]);
      window.location.href = mailtoLink[0]
    } else {
      console.log('outputting text');
      setText('Did you forget to provide a mailto link?');
    }
  }, []);

  /**
   * To use this, just provide a standard mailto link as the query param.
   *
   * You can generate it with something like this: https://www.mailto.link/
   *
   * eg: noalbalint.com/send-email?mailto:melanie.joly@parl.gc.ca?cc=justin.trudeau@parl.gc.ca&subject=Ceasefire%20Now
   */
  return (
    <>
      <div className='flex items-center justify-center text-lg'>
        { text }
      </div>
    </>
  )
}