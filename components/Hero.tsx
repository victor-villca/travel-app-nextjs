import Image from 'next/image'
import React from 'react'
import {AiFillStar, AiOutlineCloseCircle} from 'react-icons/ai'
import Button from './Button'
import {GiCrocJaws} from 'react-icons/gi'

const Hero = () => {
  return (
    <div className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>

      <div className="hero-map" />
      
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 '>
        <Image 
          src={"/camp.svg"}
          alt='camo img'
          width={55}
          height={55}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        />
        <h1 className=' mt-2  bold-52 lg:bold-88'>Bolivia Camp Area</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatum voluptate sapiente ipsa ullam molestias facilis ea assumenda pariatur beatae aspernatur, commodi dignissimos amet ex expedita tempore voluptates, ipsum tenetur?
        </p>

        <div className='my-11 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, index) => (
                <AiFillStar key={index} color= {"yellow"} size= {25}/>
            ))}
          </div>
          <p className='bold-16 lg:bold-20 text-blue-70'>198k <span className='regular-16 lg:regular-20 ml-1'>Beatiful Reviews</span></p>
        </div>
        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button type='button' txt='Download The App' variant='btn_green'/>
          <Button type='button' txt='Download The App' variant='btn_white_text' icon={GiCrocJaws}/>
        </div>

        <div className='relative flex flex-1 items-start m-8'>
          <div className='relative z-20 flex w-80 flex-col gap-8 rounded-xl bg-green-90 px-7 py-8'>
            <div className='flex flex-col'>
              <div className='flexBetween'>
                <p className='regulra-16 text-gray-20'>Location</p>
                <AiOutlineCloseCircle size={30} color= "white"/>
              </div>
              <p className='bold-20 text-white'>
                Lago Titicaca
              </p>
              <div className='flexBetween'>
                <div className='flex flex-col'>
                  <p className='regular-16 block text-gray-20'>Distance</p>
                  <p className='bold-20 text-white'>198.10 km.</p>
                </div>
                <div className='flex flex-col'>
                  <p className='regular-16 block text-gray-20 whitespace-nowrap'>Altitude</p>
                  <p className='bold-20 whitespace-nowrap text-white'>5930 m.s.n.m</p>
                </div>
              </div>
            </div>


          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Hero