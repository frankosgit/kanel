import React from 'react'
import Form from './form'

const Contact = () => {
  return (
    <div className='flex flex-col pt-10 content-center m-auto'>
        <h2 className='text-3xl'>Contact me</h2>
        <div className='flex flex-row w-11/12 content-center m-auto p-10 gap-20'>
            <div className='flex flex-col w-2/4'>
                <h3 className='text-2xl mb-10'>Hello!</h3>
                <p className='text-xl'>Feel free to reach out to explore any opportunities within Stockholm or remote</p>
            </div>
            <div className='w-2/4'>
            <Form/>
            </div>
        </div>
    </div>
  )
}

export default Contact