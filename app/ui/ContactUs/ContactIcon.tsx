import React from 'react'
import Image from 'next/image'

type Props = {
    url: string
}

const ContactIcon = ({url}: Props) => {
  return (
    <div className='bg-black flex items-center justify-center w-10 h-10 rounded-full'>
        <Image 
            src={url}
            width={30}
            height={30}
            alt='contact icon'
        />
    </div>
  )
}

export default ContactIcon