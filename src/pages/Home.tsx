import React from 'react'
import image1 from '../images/image1.png'
import { Button } from '@mui/material'

function Home() {
  return (
    <>
      <div className='flex justify-between items-center bg-violet-600 p-10'>
        <div className="sm:w-72 md:w-96 bg-hero bg-cover sm:bg-none text-left text-white space-y-5 text-2xl font-extralight">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque recusandae deserunt magnam eaque quae incidunt, natus ullam eius voluptatem rem ad aliquam quaerat nemo ratione, quia, ducimus saepe accusantium.
          </p>
          <div className='flex justify-between sm:w-64'>
            <Button variant='contained' size='small' sx={{backgroundColor: 'white', color: 'purple'}}>Shop Now</Button>
            <Button variant='contained' size='small' sx={{backgroundColor: 'white', color: 'purple'}}>Contact Us</Button>
          </div>
        </div>
        <div className='invisible w-0 sm:w-72 md:w-auto sm:visible'>
          <img src={image1} alt='' />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 p-10 gap-3'>
        <div className='shadow-lg shadow-[#1c0c4e] bg-[#1c0c4e] p-5 text-center mt-2 text-white rounded-lg'>
          <p className='text-center font-bold mb-3'>Why Shop with us</p>
          <p className='text-sm text-left font-thin'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate harum, temporibus
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate harum, temporibus
          </p>
        </div>
        <div className='shadow-lg shadow-[#302384] bg-[#302384] p-5 text-center mt-2 text-white rounded-lg'>
          <p className='text-center font-bold mb-3'>What we offer</p>
          <p className='text-sm text-left font-thin'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate harum, temporibus
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate harum, temporibus
          </p>
        </div>
        <div className='shadow-lg shadow-[#1c0c4e] bg-[#1c0c4e] p-5 text-center mt-2 text-white rounded-lg'>
          <p className='text-center font-bold mb-3'>Why Shop with us</p>
          <p className='text-sm text-left font-thin'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate harum, temporibus
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate harum, temporibus
          </p>
        </div>
      </div>

      <div>
        <div className='text-slate-500 text-center border-b-2'>
          <p>Products</p>
        </div>
      </div>
    </>
  )
}

export default Home