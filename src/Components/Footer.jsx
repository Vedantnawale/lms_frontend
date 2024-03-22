import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'  // bootstrap wale icons pick karne ke liye

const Footer = () => {

    const currentDate = new Date()
    const year = currentDate.getFullYear()
  return (
    <>
    <footer className='fixed bottom-0 left-0 w-full h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
        <section className='text-lg'>
            Copyright {year} | All rights reserved
        </section>
        <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                    <BsFacebook />
                </a>
                <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                    <BsInstagram />
                </a>
                <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                    <BsLinkedin />
                </a>
                <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                    <BsTwitter />
                </a>
        </section>
    </footer>
    </>
  )
}

export default Footer