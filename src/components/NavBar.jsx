import React, { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';
import MobileNav from './MobileNav.jsx';
import HamburgerButton from './HamburgerButton.jsx';
import { useGSAP } from '@gsap/react';
import { HeroContext } from '../contexts/HeroAnimateContext.jsx';
import gsap from 'gsap';
const NavBar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [toggleNav, setToggleNav] = useState(false);
    const { heroAnimate } = useContext(HeroContext)
    const containerRef = useRef()
    const secondContainerRef = useRef()
    const handleChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const tl = gsap.timeline()
    useGSAP(() => {
        if (heroAnimate) {
            tl.to(containerRef.current, {
                opacity: 1,
                duration:0.5
            })

            tl.fromTo('h1', {
                y: -10,
                opacity:0,
            },{
                y:0,
                opacity:1,
                stagger: 0.2,
                duration: 0.8,
            })
        }

    }, { dependencies: [heroAnimate], scope: containerRef.current })

    return (
        <header ref={containerRef} className=' opacity-0 fixed flex bg-transparent top-0  w-full items-center justify-between py-2 px-3 md:py-6 md:px-16 text-color1 font-bold text-xl z-50  myUnderline'>
            <h1 className=' name z-50 text-3xl '>Name</h1>

            <div ref={secondContainerRef} className='hidden md:flex justify-between space-x-8 items-center'>
                <h1 className='work animate  '>Work</h1>
                <h1 className='about animate  ' >About</h1>
                <h1 className='contact animate  '>Contact</h1>
            </div>

            <div className='flex justify-center items-center space-x-5'>
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
