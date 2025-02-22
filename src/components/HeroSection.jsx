import React from 'react'
import TextAnimateUP from '../animateHelper/TextAnimateUP'
import gsap from 'gsap'
import { useRef } from "react";
import { useGSAP } from '@gsap/react';

const HeroSection = () => {
    const containerRef = useRef();

    const tl = gsap.timeline();
    useGSAP(() => {
        gsap.from('.animateee', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.045, // Har letter ke beech 0.1s ka gap
            ease:'back.out'
        });
    }, { scope: containerRef.current });

    
    return (
        <section ref={containerRef} className='container text-color1 flex items-center justify-center flex-col  max-md:mt-[-10vh]'>
            <h1 className='opacity-50  tracking-widest uppercase' >CREATIVE DEVELOPER</h1>
            <p  className=' my-10 text-[clamp(2.5rem,7vw,6rem)] max-w-[13em] text-center font-bold '>
                <TextAnimateUP str={'Crafting'}  /> <TextAnimateUP str={'Digital'}  /> <TextAnimateUP str={'Experiences'}  /> <TextAnimateUP str={'Through'}  /> <TextAnimateUP str={'Code'}  /> <TextAnimateUP str={'& '}  /> <TextAnimateUP str={'Design'}  />
            </p>
            <p className=' text-center opacity-50'>
                Building immersive web experiences that push the boundaries of what's possible
            </p>
            <div>

            </div>
        </section>
    )
}

export default HeroSection