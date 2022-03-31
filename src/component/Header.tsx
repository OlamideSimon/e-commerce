import { Button } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

function Header() {
  return (
    <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center px-20 py-5'>
        <div className='w-20'>
            <Link to='/'>
                <img src={logo} alt='' />
            </Link>
        </div>
        <div className='sm:flex text-center space-y-2 mt-4 items-center space-x-2 uppercase'>
            <div className='flex space-x-2 items-center text-[13px]'>
                <NavLink to='/'>
                    <p>Home</p>
                </NavLink>
                <div className='relative group items-center'>
                    <button className='flex flex-col uppercase items-center w-full focus:outline-none'>
                        <span>Categories</span>
                    </button>
                    <div className='absolute z-10 hidden bg-gray-400 group-hover:block w-32'>
                        <div className='pt-1 pb-1 bg-purple-400'>
                            <div className='text-[11px] cursor-pointer'>
                                <NavLink to='categories/women' className={({isActive}) => isActive ? 'text-white': ''}>
                                    <p className='p-3 hover:bg-gray-100'>Women's Fashion</p>
                                </NavLink>
                                <NavLink to='categories/men' className={({isActive}) => isActive ? 'text-white': ''}>
                                    <p className='p-3 hover:bg-gray-100'>Men's Fashion</p>
                                </NavLink>
                                <NavLink to='categories/shoes' className={({isActive}) => isActive ? 'text-white': ''}>
                                    <p className='p-3 hover:bg-gray-100'>Shoes</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to='/contact'>
                    <p>Contact</p>
                </NavLink>
                <NavLink to='/about'>
                    <p>About</p>
                </NavLink>
            </div>
            <Button variant='contained' size='small' sx={{fontSize: 12}}>Signin</Button>
        </div>
    </div>
  )
}

export default Header