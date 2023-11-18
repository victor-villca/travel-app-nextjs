import React from 'react'
import ServiceBox from './custom/ServiceBox'
import { SERVICES_INFO } from '@/constants/constants'

const Services = () => {
  return (
    <div className='flex flex-col items-center gap-10 lg:gap-20 mb-32'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-xl text-gray-50 text-center'>CATEGORY</h2>
        <h1 className='text-5xl text-black text-center font-bold capitalize'>We offer best services</h1>
      </div>
      <div className='flex flex-col lg:flex-row gap-8'>
        {SERVICES_INFO.map((service, index) => (
          <div key={index}>
            <ServiceBox img= {service.img} title= {service.title} description= {service.description}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services