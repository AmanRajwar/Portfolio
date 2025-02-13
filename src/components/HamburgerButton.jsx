import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const HamburgerButton = ({ setToggleNav, toggleNav }) => {
    const box1 = useRef()
    const box2 = useRef()
    const box3 = useRef()

    useGSAP(() => {
        if (toggleNav) {
            gsap.to(box1.current, { rotate: "40deg", y: "6px", duration: 0.3 });
            gsap.to(box2.current, { opacity: 0, duration: 0.3 });
            gsap.to(box3.current, { rotate: "-45deg", y: "-4px", duration: 0.3 });
        } else {
            gsap.to(box1.current, { rotate: "0deg", y: "0px", duration: 0.3 });
            gsap.to(box2.current, { opacity: 1, duration: 0.3 });
            gsap.to(box3.current, { rotate: "0deg", y: "0px", duration: 0.3 });
        }
    }, [toggleNav]);
    
    return (
        <button
            onClick={() => { setToggleNav(prev => !prev) }}
            className='z-50 flex flex-col space-y-1 md:hidden'
        >
            <span ref={box1} className='w-[21px] h-[2px] bg-color1'></span>
            <span ref={box2} className='w-[21px] h-[3px] bg-color1'></span>
            <span ref={box3} className='w-[21px] h-[2px] bg-color1'></span>
        </button>
    )
}

export default HamburgerButton