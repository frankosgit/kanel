import React from 'react'
import Image from 'next/image'

interface ProjectCardsProps {
    src: string;
    description: string;
    title: string;
}

const ProjectCards = ({src, title, description}: ProjectCardsProps) => {
  return (
    <div className='relatve overflow-hidden rounded-lg shadow-lg border border-primary mt-12'>
        <Image
        src={src}
        width={1000}
        height={1000}
        alt={title}
        className='w-full object-contain'
        />

        <div className='relative p-4'>
        <h1 className='text-2xl font semibold text-white'>{title}</h1>
        <p className="mt-2">{description}</p>
        </div>

    </div>
  )
}

export default ProjectCards