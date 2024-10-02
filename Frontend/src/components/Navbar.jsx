import { NavLink, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets/assets_frontend/assets'
import { useState } from 'react'

const Navbar = () => {
    const navigate = useNavigate()
    // const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 '>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src= {assets.logo} alt="" />
        <ul className=' hidden md:flex items-start gap-5 font-medium'>
            <NavLink to={'/'}>
                <li className='py-1 '>HOME</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
            </NavLink>
            <NavLink to={'/doctors'}>
                <li className='py-1 '>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden' />
            </NavLink>
            <NavLink to={'/about'}>
                <li className='py-1 '>ABOUT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
            </NavLink>
            <NavLink to={'/contact'}>
                <li className='py-1 '>CONTACT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token ? 
                <div className='flex items-center gap-2 cursor-pointer group relative '>
                     <img src={assets.profile_pic} alt="" className='w-8 rounded-full' />
                     <img src={assets.dropdown_icon} alt="" className='w-2.5' />
                     <div className='absolute top-8 right-0  text-base font-medium text-gray-500 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/my-profile')}>My Profile</p>
                            <p className='hover:text-black cursor-pointer' onClick={()=>navigate('/my-appointments')}>My Appointment</p>
                            <p className='hover:text-black cursor-pointer' onClick={()=>setToken(false)}>Logout</p>
                        </div>
                     </div>
                </div>
                : <button className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block' onClick= {() => navigate('/login')}>Create Account</button>
            }
            
        </div>
    </div>
  )
}


export default Navbar