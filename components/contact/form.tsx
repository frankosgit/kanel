import React from 'react'
import Button from '@/components/button/button'


const Form = () => {
  return (
    <form onSubmit={() => console.log('sent')}>
        <div className='mb-4 flex flex-col'>
            <label className='mb-2 font-bold text-xl' htmlFor="name">Name</label>
            <input className='border border-primary rounded ml-8 h-8 text-black text-lg pl-2' type="text" name="name" id="name"/>
        </div>
        <div className='mb-4  flex flex-col'>
            <label className='mb-2 font-bold text-xl' htmlFor="name">Company</label>
            <input className='border border-primary rounded ml-8 h-8 text-black text-lg pl-2' type="text" name="company" id="company"/>
        </div>
        <div className='mb-4  flex flex-col'>
            <label className='mb-2 font-bold text-xl' htmlFor="name">Email</label>
            <input className='border border-primary rounded ml-8 h-8 text-black text-lg pl-2' type="text" name="email" id="email"/>
        </div>
        <div className='mb-4  flex flex-col'>
            <label className='mb-2 font-bold text-xl flex flex-col' htmlFor="Message">Message</label>
            <textarea className='border border-primary rounded ml-8 text-black text-lg pl-2' name="message" id="message"/>
        </div>
        <button className='bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow, text-shadow] text-sm px-4 h-8 rounded-full inline-flex items-center text-offWhite, bg-white bg-opacity-10 border border-border-white backdrop-filter-[12px] hover:bg-opacity-20 hover:text-shadow hover:shadow-primary transition-colors ease-in'>Submit</button>
    </form>
  )
}

export default Form