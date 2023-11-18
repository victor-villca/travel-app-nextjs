import Image from 'next/image'
import React from 'react'
type ServiceBoxProps = {
    img :string
    title: string
    description: string
}

const ServiceBox = ({img, title, description}: ServiceBoxProps) => {
  return (
    <div className=' bg-white flex flex-col gap-6 justify-center items-center
    rounded-2xl  px-5 py-1  lg:px-8 lg:py-12 h-80 lg:h-96
    '>
        <div className='m-1 object-contain'>
            <Image src={img} alt='img alt' width={100} height={100}/>
        </div>
        <div className='flex flex-col gap-4 items-center w-60 '>
            <h1 className='text-xl font-semibold text-black text-center'>{title}</h1>
            <p className='text-center'>{description}</p>
        </div>
    </div>
  )
}

export default ServiceBox