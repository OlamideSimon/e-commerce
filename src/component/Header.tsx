import React from 'react'
import { NavLink } from 'react-router-dom'
import CartIcon from '@mui/icons-material/ShoppingCart'

function Header() {
  return (
    <div className='w-full p-3 text-white space-y-3 sm:space-y-0 sm:p-8 flex flex-col sm:flex-row justify-between items-center'>
        <div className=''>
            <p className='uppercase font-semibold text-2xl'>AlphaStore</p>
        </div>
        <div className='flex uppercase space-x-3 sm:text-sm'>
            <NavLink to='/' className={({isActive}) => isActive ? 'border-b-[#dc143c] border-b-2': ''}>
                <p>Home</p>
            </NavLink>
            <div className='relative group items-center'>
                <button className='flex flex-col uppercase items-center w-full focus:outline-none'>
                    <span>Categories</span>
                </button>
                <div className='absolute z-10 hidden bg-gray-400 group-hover:block w-32'>
                    <div className='pt-1 pb-1 bg-[#000000]'>
                        <div className='text-[11px] cursor-pointer'>
                            <NavLink to='categories/female' className={({isActive}) => isActive ? 'text-[#dc143c]': ''}>
                                <p className='p-3 hover:bg-gray-100 hover:text-[#04619f]'>Women's Fashion</p>
                            </NavLink>
                            <NavLink to='categories/male' className={({isActive}) => isActive ? 'text-[#dc143c]': ''}>
                                <p className='p-3 hover:bg-gray-100 hover:text-[#04619f]'>Men's Fashion</p>
                            </NavLink>
                            <NavLink to='categories/shoes' className={({isActive}) => isActive ? 'text-[#dc143c]': ''}>
                                <p className='p-3 hover:bg-gray-100 hover:text-[#04619f]'>Shoes</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <NavLink to='/contact' className={({isActive}) => isActive ? 'border-b-[#dc143c] border-b-2': ''}>
                <p>Contact</p>
            </NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? 'border-b-[#dc143c] border-b-2': ''}>
                <p>About</p>
            </NavLink>
        </div>
        <div className='flex items-center space-x-2'>
            <div className='flex cursor-pointer snipcart-checkout'>
                <CartIcon />
                <p className='snipcart-items-count'></p>
            </div>
        </div>
    </div>
  )
}

export default Header