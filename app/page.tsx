'use client'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/hero/hero'
import { Container } from 'postcss'
import AnimatedText from '@/components/animatedtext/animatedtext'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
    <Hero/>
    <div className='px-20 py-8  '>
      <h4 className= 'text-center text-3xl'>KanEL stöttar elnätet med den unika lösningen kallad frekvensreglering. Vi erbjuder rådgivning kring produkter och lösningar som kan bidra till både miljövinster såväl som betydande energibesparingar. Vi strävar efter optimal bekvämlighet för dig som kund och erbjuder en sömlös lösning för bästa möjliga kundupplevelse.</h4>
    </div>
    <section className= "flex h-[150vh] flex-col items-center">
      <AnimatedText text="Misson:" className="text-[200px]"/>
    </section>
    <section className= "flex h-[150vh] flex-col items-center">
      <AnimatedText text="Faktor:" className="text-[200px]"/>
    </section>
    <section className= "flex h-[150vh] flex-col items-center">
      <AnimatedText text="Teknik:" className="text-[200px]"/>
    </section>
    </>
  )
}
