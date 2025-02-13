import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';
import MobileNav from './MobileNav.jsx';
import HamburgerButton from './HamburgerButton.jsx';

const NavBar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [toggleNav, setToggleNav] = useState(false);

    const handleChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <header className='relative flex bg-transparent top-0 left-0 w-full items-center justify-between py-2 px-3 md:py-6 md:px-16 text-color1 font-bold text-xl z-50  myUnderline'>
            <h1 className='z-50 text-3xl'>Name</h1>

            <div className='hidden md:flex justify-between space-x-8 items-center'>
                <h1>Work</h1>
                <h1>About</h1>
                <h1>Contact</h1>
            </div>

            <div className='flex justify-center items-center space-x-5'>
                {/* ✅ Single Theme Toggle Button for both Desktop & Mobile */}
                <button 
                    onClick={handleChangeTheme} 
                    className='z-50 bg-red-900 rounded-full transition-all duration-300 
                               w-7 h-7 md:w-10 md:h-10'
                ></button>

                {/* Mobile Menu Button (Only visible on small screens) */}
               <HamburgerButton setToggleNav={setToggleNav} toggleNav={toggleNav} />
            </div>

            {/* Mobile Navigation */}
            <MobileNav toggle={toggleNav} />
        </header>
    );
};

export default NavBar;
