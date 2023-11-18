import { NAV_LINKS } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './custom/Button'
import {AiOutlineUser, } from 'react-icons/ai'
import {FaBars, } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href={"/"}>
            <Image 
            src={"/logo.svg"}
            alt='logo img'
            width={250}
            height={60}
            />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link, index) => (
                <Link href={link.href} key={index}
                className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
                >{link.label} </Link>
            ))}
        </ul>
        <div className='hidden lg:flexCenter'>
            <Button 
                txt='Log In'
                type='button'
                icon ={AiOutlineUser}
                variant='btn_dark_green'
            />
        </div>
        <FaBars 
            size= {"2rem"}
            className= 'flexCenter lg:hidden'
        />
    </nav>
  )
}

export default Navbar