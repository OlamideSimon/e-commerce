import { Button } from '@mui/material'
import contact from '../images/contact.png'
import logo from '../images/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

function Contact() {
  return (
    <>
      <div className='flex items-center justify-between bg-[#2c3e50] text-center text-white'>
        <div className='text-center text-lg bg-hero2 p-20 sm:p-0 bg-cover sm:bg-none w-full sm:w-1/2'>
          <p className='uppercase mx-10 font-medium'>Reach out to us</p>
        </div>
        <div className='w-0 sm:w-1/2 invisible sm:visible'>
          <img src={contact} alt='' className='rounded-l-full w-full md:h-96' />
        </div>
      </div>

      <div className='p-16 space-y-10'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div className='text-center bg-slate-100 rounded-3xl p-2'>
            <LocationOnIcon fontSize='large' />
            <p className='font-semibold text-[13px] uppercase'>Location</p>
            <p className='text-sm font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorum quibusdam</p>
          </div>
          <div className='text-center bg-slate-100 rounded-3xl p-2'>
            <EmailIcon fontSize='large' />
            <p className='font-semibold text-[13px] uppercase'>Email Address</p>
            <p className='text-sm font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorum quibusdam</p>
          </div>
          <div className='text-center bg-slate-100 rounded-3xl p-2'>
            <ContactPhoneIcon fontSize='large' />
            <p className='font-semibold text-[13px] uppercase'>Phone Number</p>
            <p className='text-sm font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorum quibusdam</p>
          </div>
        </div>

        <div className='flex justify-center w-full'>
          <div className='border-2 w-fit p-5 space-y-3 bg-slate-100'>
          <div className='w-full flex justify-center'>
            <img src={logo} width={100} alt='' />
          </div>
          <div className='border-2 border-slate-400 p-1 rounded-xl bg-white text-slate-400'>
            <input type='text' placeholder='Enter Name' className='bg-transparent w-full focus:outline-none' /> 
          </div>
          <div className='border-2 border-slate-400 p-1 rounded-xl bg-white text-slate-400'>
            <input type='email' placeholder='Enter email' className='bg-transparent w-full focus:outline-none' /> 
          </div>
          <div className='border-2 border-slate-400 p-1 rounded-xl bg-white text-slate-400'>
            <textarea rows={5} cols={40} placeholder='Leave a message...' className='bg-transparent w-full focus:outline-none' /> 
          </div>
          <div className='w-full text-right'>
            <Button variant='contained'>Send</Button>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact