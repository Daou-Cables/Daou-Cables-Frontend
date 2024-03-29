import React from 'react'
import Image from 'next/image'

type Props = {
    icon: string;
    placeholder: string;
    wide?: boolean;
    customWidth?: number;
}

const InputField = ({ icon, placeholder, wide = false, customWidth }: Props) => {
  return (
    <div className='bg-[#F5F5F5] flex p-4 space-x-4'>
        <Image 
            src={icon}
            alt=''
            width={customWidth ? customWidth: 25}
            height={25}
            className='self-start'
        />
        {wide || <input type="text" placeholder={placeholder} className='bg-inherit text-base outline-none w-full'/>}
        {wide && <textarea rows={12} placeholder={placeholder} style={{
          marginLeft: 10
        }} className='bg-inherit text-base outline-none w-full'/>}
    </div>
  )
} 

export default InputField