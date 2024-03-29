import React from 'react'
import Image from 'next/image'

type Props = {
    icon: string;
    placeholder: string;
}

const InputField = ({ icon, placeholder }: Props) => {
  return (
    <div className='bg-[#F5F5F5] flex p-4 space-x-4'>
        <Image 
            src={icon}
            alt=''
            width={25}
            height={25}
        />
        <input type="text" placeholder={placeholder} className='bg-inherit text-base outline-none'/>
    </div>
  )
}

export default InputField