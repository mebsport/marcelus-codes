'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }

  const TAB_DATA = [
    {
      title: 'Skills',
      id: 'skills',
      content: (
        <ul className='list-disc pl-6'>
          <li>React</li>
          <li>Next.js</li>
          <li>Unity3D</li>
        </ul>
      ),
    },
    {
      title: 'Languages',
      id: 'languages',
      content: (
        <ul className='list-disc pl-6'>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>TypeScript</li>
          <li>Java</li>
          <li>C#</li>
        </ul>
      ),
    },
    {
      title: 'Education',
      id: 'education',
      content: (
        <ul className='list-disc pl-6'>
          <li>Windsor High School CO&apos; 2024</li>
        </ul>
      ),
    },
  ]

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div>
        <Image
          src='/images/Marcelus_Coding_Robotics.jpg'
          alt='Marcelus Coding At Robotics Competition'
          width={600}
          height={600}
        />
        <Image
        className='mt-4'
        src='/images/Fun_Robotics_Coding.jpg'
        alt='Fun Coding At Robotics Competition'
        width={600}
        height={600}
        />
        </div>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl fonot-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg text-[#d4dce2]'>
            Hi there! I&apos;m a 17-year-old web and mobile developer based in
            Hartford, CT, with a passion for crafting immersive digital
            experiences. I specialize in building dynamic and user-friendly
            applications using technologies like React, Next.js, and Unity. With
            a strong foundation in Python, C#, JavaScript, TypeScript, HTML, and
            CSS, I thrive on bringing creative ideas to life through elegant
            code and seamless functionality. Whether it&apos;s developing
            interactive websites, robust mobile apps, or engaging games,
            I&apos;m dedicated to pushing the boundaries of what&apos;s possible
            in the digital realm. I work a lot with FIRST Robotics, Including
            FLL and FTC so I am well versed in that realm of programming.
            Let&apos;s innovate together!
          </p>
          <div>
            <div className='flex flex-row mt-8 justify-start'>
              <TabButton
                selectTab={() => handleTabChange('skills')}
                active={tab === 'skills'}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange('languages')}
                active={tab === 'languages'}
              >
                Languages
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange('education')}
                active={tab === 'education'}
              >
                Education
              </TabButton>
            </div>
            <div className='mt-2'>
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
