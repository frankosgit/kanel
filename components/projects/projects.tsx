import React from 'react'
import ProjectCards from '../projectcards/projectcards'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent'>
            My projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'></div>
  
        <ProjectCards
            src='/fullstackecom.png'
            title='Fullstack Ecommerce'
            description='Built with React, TailwindCSS, Express and MongoDB'
        />

        <ProjectCards
              src='/frontendecom.png'
              title='Frontend Ecommerce'
              description='Built with React, TailwindCSS'
        />
    </div>
  )
}

export default Projects