import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface ProjectCardProps {
  imgUrl: string
  title: string
  description: string
  gitUrl: string
  siteUrl: string
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div>
      <div
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${props.imgUrl})`, backgroundSize: 'cover' }}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0  hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link
            href={props.gitUrl}
            className='h-14 w-14 border-2 relative rounded-full text-[#ADB7BE] hover:text-[#0047D4] transition-all duration-500'
          >
            <CodeBracketIcon className='h-10 w-10 absolute top-1/2 left-1/2 -transform-translate-x-1/2 -transform-translate-y-1/2' />
          </Link>
          <Link
            href={props.siteUrl}
            className='text-[#ADB7BE] hover:text-[#0047D4] transition-all duration-500'
          >
            <EyeIcon className='h-10 w-10 absolute top-1/2 left-1/2 -transform-translate-x-1/2 -transform-translate-y-1/2' />
          </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-[#181818] px-4 py-4'>
        <h5 className='text-xl font-semibold mb-2'>{props.title}</h5>
        <p className='text-[#ADB7BE]'>{props.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
