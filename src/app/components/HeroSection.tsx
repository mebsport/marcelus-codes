'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12 '>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0047D4] to-white'>
              Hello, I'm Marcelus, {''}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "I'm A Web Developer",
                1500,
                "I'm A Web Designer",
                1500,
                "I'm A Game Developer",
                1500,
                "I'm A Game Designer",
                1500,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#d4dce2] text-base sm:text-lg lg:text-xl mb-6'>
            I'm a Developer, Designer, Photographer, and a Student. I love
            making games, websites, and working on any project I can get my
            hands on. I am looking forward to working with other developers, so
            if you want to work together on a project feel free to contact me. I
            am also into content creation, so make sure to check out my YouTube
            channel.
          </p>
          <div className='place-self-center'>
            <button className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-slate-200 text-white border border-white hover:text-black mt-3'>
              CONTACT ME
            </button>
            <button className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-slate-200 text-white border border-white hover:text-black mt-3'>
              VIEW MY GITHUB
            </button>
            <button className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-slate-200 text-white border border-white hover:text-black mt-3'>
              SEE WHAT I'M UP TO
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[300px] h-[300px]'>
            <Image
              src='/Images/MarcelusCodesLogo.png'
              alt='Marcelus Codes Logo'
              className='transform-translate-x-1/2 transform-translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
