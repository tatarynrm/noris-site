import Image from 'next/image'
import React from 'react'
import AboutServicesCard from './about-services-card'

const AboutServices = () => {
  return (
    <section>
        <div className='container w-full flex flex-col'>
       <AboutServicesCard/>
        </div>
    </section>
  )
}

export default AboutServices