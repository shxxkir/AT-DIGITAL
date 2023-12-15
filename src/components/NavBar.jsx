import React, { useState } from 'react'
import { IoMenu, IoCloseOutline } from "react-icons/io5";

function NavBar() {
    const [toggleDropdown, setToggleDropdown] = useState(false)

    return (
        <div className='flex justify-between bg-primary text-white px-5 md:px-8 lg:px-14 py-3'>
            <div className='flex gap-2 items-center cursor-pointer'>
                <img
                    src= {require('../assets/logo.png')}
                    width={45}
                    alt='logo'
                />
                <h1 className='text-2xl sm:text-3xl font-bold'>AT DIGITAL</h1>
            </div>

            {/* Desktop Navigation */}
            <div className='md:flex md:gap-5 lg:gap-8 items-center justify-end text-base hidden'>
                <a href='/'>SERVICES</a>
                <a href='/'>ABOUT US</a>
                <a href='/'>CONTACT US</a>
                <a href='/'>CAREERS</a>
            </div>

            {/* Mobile Navigation */}
            <div className='md:hidden my-auto'>
                {toggleDropdown ? (
                    <IoCloseOutline
                    style={{fontSize: '30px',}}
                    onClick={() => setToggleDropdown((prev) => !prev)}
                />
                ) :
                (
                    <IoMenu
                    style={{fontSize: '30px',}}
                    onClick={() => setToggleDropdown((prev) => !prev)}
                    />
                )}
                    {toggleDropdown && (
                        <div className='absolute right-3 top-[54px] flex flex-col text-sm items-end px-5 py-3 min-w-[170px] rounded-lg bg-primary divide-y'>
                            <a href='/' className='py-2 hover:text-secondary'>SERVICES</a>
                            <a href='/' className='py-2 hover:text-secondary'>ABOUT US</a>
                            <a href='/' className='py-2 hover:text-secondary'>CONTACT US</a>
                            <a href='/' className='py-2 hover:text-secondary'>CAREERS</a>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default NavBar