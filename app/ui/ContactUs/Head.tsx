import React from 'react'
import SectionTitle from '../General/SectionTitle'

type Props = {}

const Head = (props: Props) => {
  return (
    <div>
        <SectionTitle title="Let's talk about your project" />
        <p className='mt-8 text-lg sm:text-2xl md:w-1/2'>Please submit your purchasing inquiry so we can provide detailed product information and pricing</p>
    </div>
  )
}

export default Head