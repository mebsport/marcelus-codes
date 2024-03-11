import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'This is a personal portfolio',
    imgUrl: '/Images/Projects/marcelus-brown-portfolio-screenshot.png',
    gitUrl:'https://github.com/mebsport/portfolio',
    siteUrl:'https://marcelusbrown.com/'
  },
]

const ProjectSection = () => {
  return (
    <div id='projects'>
      <h2 className='text-4xl font-bold text-center pb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0047D4] to-white'>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
            siteUrl={project.siteUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectSection
