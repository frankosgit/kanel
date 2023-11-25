import React from 'react'
import classNames from 'classnames'

export const HeroTitle = ({children, className}: HeroElementProps) => {
  return <h1 
  className={classNames(
    "text-gradient text-white text-6xl md:text-8xl my-6", className
    )}>{children}</h1>
}

export const HeroSubtitle = ({children, className}: HeroElementProps) => {
  return <p 
  className={classNames(
    "md:text-xl text-lg mb-12 text-shadow", className
  )}>{children}</p>
}

export const Hero = ({children}: HeroProps) => {
  return (
    <div className='text-center text'>{children}</div>
  )
}

