import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flexCenter mb-18'>
        <div className='padding-container max-container flex flex-col w-full'>
          <div className='flex flex-col items-start justify-center gap-14 md:flex-row flex1'>
            <Link href={"/"} className=''>
              <Image 
              src={"hilink-logo.svg"}
              alt='logo img'
              width={74}
              height={29}
              />
            </Link>

            <div className='flex justify-normal gap-10 '>
              {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className="regular-14 flex flex-col gap-3 text-gray-30">
                    {columns.links.map((link) => (
                      <Link href="/" key={link} className=' whitespace-nowrap'>
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
            </div>
            <div className='flex flex-col gap-5' mt-4>
              <FooterColumn title={FOOTER_CONTACT_INFO.title} >
                    {FOOTER_CONTACT_INFO.links.map((link, index)=>(
                      <Link href={"/"} key={index}
                        className='flex gap-2 md:flex-col lg:flex-row'
                      >
                        <p className=' whitespace-nowrap text-sm'>{link.label}: </p>
                        <p className='medium-14 text-blue-70 text-sm whitespace-nowrap'>{link.value}</p>
                      </Link>
                    ))}
              </FooterColumn>
            </div>
            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                  <ul className='regular-11 flex gap-4 text-gray-30'>
                    {SOCIALS.socialLinks.map((link, index) => (
                      <Link href={"/"}  key={index} className=''>
                        <link.icon size={"1.9rem"}/>
                      </Link>
                    ))}
                  </ul>
              </FooterColumn>
            </div>
          </div>
          <div className='border bg-gray-20 flex-1 m-5' />
            <p className='mt-3 regular-14 w-full text-center text'>2023 Travel App Copyright. All rights reserved</p>
        </div>
    </footer>
  )
}
type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}
export default Footer