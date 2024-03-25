import React from 'react';
import Button from './Button';

// Assuming you have an SVG uploaded somewhere accessible via URL
const emailIconURL = '/icons/email.svg';

export default function EmailForm() {
  return (
    <div>
      <form action="">
        {/* Added styles for background SVG and text */}
        <input
          type="text"
          style={{
            backgroundImage: `url(${emailIconURL})`,
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
            paddingLeft: '30px',
          }}
          placeholder="Your Email"
          className='border-[1px] border-black p-3 -skew-x-12'
        />
        <Button title='Send Inquiry' url='/contact-us'/>
      </form>
    </div>
  );
}
