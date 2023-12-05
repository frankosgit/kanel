'use client';

import classNames from 'classnames';
import React, { CSSProperties } from 'react'
import { useInView } from 'react-intersection-observer'
import Projects from '@/components/projects/projects'

const HeroImg = () => {
  const { ref, inView} = useInView({threshold: 0.4, triggerOnce: true});
  const [lines, setLines] = React.useState([
    {direction: "to bottom", duration:2900, size: 20},
    {direction: "to right", duration:3000, size: 15}

  ])

  return (
    <div
    ref ={ref} 
    className='[perspective:2000px] mt-[2.8rem]'
    >
    
    <div 
    className={classNames(
    'relative rounded-lg border-transparent-white border-1 bg-hero-gradient bg-white bg-opacity-[0.01]',
    inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
    "before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0",
    inView && "before:animate-image-glow"
    )}
    >

      <div className="absolute w-full h-full top-0 left-0 z-20">
        {lines.map((line) => (
            <span 
            style={
              {
                "--direction": line.direction,
                "--size": line.size,
                "--animation-duration": `${line.duration}ms`,
              } as CSSProperties
            }
            className={classNames(
              'absolute top-0 right-0 block h-[1px] w-[10rem] bg-glow-lines',
              line.direction === "to right" && 
              `left-0 h-[1px] w-[calc(var(--size)*1rem)] animate-glow-line-horizontal`,
              line.direction === "to bottom" && 
              `right-0 h-[calc(var(--size)*1rem)] w-[1px] animate-glow-line-vertical`
              )}
            />

        ))}

      </div>

      <Projects/>
      
    </div> 
    </div>
  )
}

export default HeroImg