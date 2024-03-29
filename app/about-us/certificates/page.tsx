import SectionTitle from '@/app/ui/General/SectionTitle'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='mt-20'>
            <header className='p-8 pb-20 flex items-start justify-start bg-[#F5F5F5] flex-col md:block md:px-20'>
                    <SectionTitle title='Our Certificates' />
                <p className='mt-12'>
                    what makes us special Lorem ipsum dolor sit amet.
                </p>
            </header>
    </div>
  )
}

export default page