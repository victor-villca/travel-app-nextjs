import { DESTINATIONS_INFO, SERVICES_INFO } from '@/constants/constants'
import React from 'react'
import ServiceBox from './custom/ServiceBox'
import DestinationBox from './custom/DestinationBox'

const Destinations = () => {
  return (
    <div className='flex flex-col items-center gap-10 lg:gap-20'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-xl text-gray-50 text-center'>Top Selling</h2>
        <h1 className='text-5xl text-black text-center font-bold capitalize'>Top destinations</h1>
      </div>
      <div className='flex flex-col lg:flex-row gap-8'>
        {DESTINATIONS_INFO.map((destination, index) => (
          <div key={index}>
            <DestinationBox place={destination.place} img={destination.img} price={destination.price} tripDays={destination.tripDays} /> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinations