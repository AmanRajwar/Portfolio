import React from 'react'

const NavBar = () => {
    return (
        <header className='flex fixed w-full items-center  justify-between py-8 px-20 bg-transparent text-heading font-bold text-xl'>
            <h1> Name</h1>

            <div className=' hidden md:flex justify-between space-x-8 items-center'>
                <h1> Work</h1>
                <h1> About</h1>
                <h1> Contact</h1>
                <div className=' bg-red-900 w-10 h-10 rounded-full'></div>

            </div>
            <div className='md:hidden flex flex-col space-y-1'>
                <span className='w-[21px] h-[2px]  bg-heading'></span>
                <span className='w-[21px] h-[3px]  bg-heading '></span>
                <span className='w-[21px] h-[2px]  bg-heading '></span>
            </div>
            
        </header>
    )
}

export default NavBar