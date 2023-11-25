'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Hero, HeroSubtitle, HeroTitle } from '@/components/hero/hero'
import AnimatedText from '@/components/animatedtext/animatedtext'
import { motion } from 'framer-motion'
import  Container from '@/components/container/container'
import './globals.css'
import Button from '@/components/button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '@/components/heroimg/heroimg'


export default function Home() {
  return (
   
      <Container>
        <Hero>
          <Button href='/' variant="secondary" size="small" className="animate-fade-in opacity-0 translate--y-[-1rem]">New releases coming 2024 - sign up to our newsletter<FontAwesomeIcon className= " pl-1 pr-2 h-[12px]"icon={faArrowRight} style={{ color: '#ffffff' }}/></Button>
          <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate--y-[-1rem]">Kanel is leading the way<br className="hidden md:block"/> in the electricty industry
          </HeroTitle>
          <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate--y-[-1rem]">KanEL stöttar elnätet med den unika lösningen kallad frekvensreglering. <br className='hidden md:block'/>Lösningar som bidra till både miljövinster såväl som betydande energibesparingar
          </HeroSubtitle>
          <Button href="/" variant="primary" size="large" className="pl-8 animate-fade-in [--animation-delay:600ms] opacity-0 translate--y-[-1rem]"> Get Started <FontAwesomeIcon className= " pl-1 pr-2 h-[12px]"icon={faArrowRight} style={{ color: '#ffffff' }}></FontAwesomeIcon></Button>
          <HeroImg />
        </Hero>
        <section className= "flex h-[150vh] flex-col items-center">
          <AnimatedText text="Misson:" className="text-7xl"/>
          </section>
          <section className= "flex h-[150vh] flex-col items-center">
          <AnimatedText text="Faktor:" className="text-7xl"/>
          </section>
          <section className= "flex h-[150vh] flex-col items-center">
          <AnimatedText text="Teknik:" className="text-7xl"/>
          </section> 
      </Container>

  )
}


