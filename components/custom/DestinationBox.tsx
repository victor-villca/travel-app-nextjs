import Image from 'next/image'
import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

type DestinationBoxProps = {
    img :string
    place: string
    price: string
    tripDays :string
}

const DestinationBox = ({img, place, price, tripDays}: DestinationBoxProps) => {
  return (
    <div className=' h-[400px] w-[350px lg:h-[600px] lg:w-[400px] rounded-tl-3xl rounded-tr-3xl  bg-white'>
        <div className=' relative h-[300px] w-[350px] lg:h-[500px] lg:w-[400px]'>
            <Image src={img} alt='img alt' fill={true} className='rounded-tl-3xl rounded-tr-3xl object-cover' />
        </div>
        <div className='flex flex-col p-4 gap-4'>
            <div className='flex justify-between font-bold items-center'>
                <p className='text-xl'>{place}</p>
                <p>${price}</p>
            </div>
            <div className='flex gap-3 items-center font-semibold'>
                <div>
                    <FaLocationArrow />
                </div>
                <p className='capitalize'>{tripDays} days trip</p>
            </div>
        </div>
    </div>
  )
}

export default DestinationBox