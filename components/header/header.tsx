"use client";

import React from 'react'
import Logo from '../icons/logo'
import Link from 'next/link'
import Container from '../container/container'
import Button from '../button/button'
import Hamburger from '../icons/hamburger'
import classNames from 'classnames'

const Header = () => {

    const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className='fixed top-0 left-0 w-full border-b border-border-white backdrop-blur-[12px] text-white'>
       <div className= "flex h-[var(--navigation-height)] max-w-[140rem] mx-auto px-8"> 
        <Link href="/" className="flex items-center text-lg">
            <Logo/>
        </Link>
       
       <nav className= {classNames(
        "md:relative md:bg-transparent md:h-auto md:w-auto md:top-0 h-[calc(100vh_-_var(--navigation-height))] md:block fixed top-[var(--navigation-height)] left-0 w-full bg-background overflow-auto",
        isOpen ? '' : 'hidden'
        )}
        >
        <ul className= {classNames( 
            "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-green md:[&_li]:border-none",
             "[&_a]:h-[var(--navigation-height)] [&_a]:w-full [&_a]:text-lg  md:[&_a]:text-md [&_a]:flex [&_a]:items-center [&_a:hover]:text-grey [&_a]:transition-colors ",
            
           )}
        >
           <li>
                <Link href="#">Tjänster</Link>
            </li>
            <li className= "md:hidden lg:block">
                <Link href="#">Information</Link>
            </li> 
            <li className= "md:hidden lg:block">
                <Link href="#">FAQ</Link>
            </li> 
            <li>
                <Link href="#">Om oss</Link>
            </li> 
            <li>
                <Link href="#">Bli partner</Link>
            </li>
            <li>
                <Link href="#">Kontakt</Link>
            </li>
        </ul>
       </nav>

       <div className='ml-auto h-full flex items-center'>
        <Link href="#" className='text-sm mr-6'>Sign up</Link>
        <Button href="#" variant="primary" size="medium" className="">Logga in</Button>
       </div>
        <button className="ml-6 md:hidden" 
        onClick={() => setIsOpen(isOpen => !isOpen)}>
            <span className="sr-only">Open menu</span>
           <Hamburger/>
        </button>
       </div>
    </header>
  )
}

export default Header