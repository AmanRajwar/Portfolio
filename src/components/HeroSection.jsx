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
            ease: 'back.out'
        });
        gsap.from('.help-text', {
            opacity: 0,
            duration: 6,

        });
        gsap.from('.button', {
            opacity: 0,
            y: 20,
            duration: 1
        })

        gsap.from('.scroll', {
            opacity:0,
            y: 20,
            duration: 1,
            yoyo:true,
            repeat:-1,
        })
    }, { scope: containerRef.current });


    return (
        <section ref={containerRef} className='container text-color1 flex items-center justify-center flex-col  max-md:mt-[-10vh]'>
            <h1 className=' help-text opacity-50  tracking-widest uppercase' >CREATIVE DEVELOPER</h1>
            <h1 className=' my-10 text-[clamp(2.5rem,7vw,6rem)] max-w-[13em] text-center font-bold '>
                <TextAnimateUP str={'Crafting'} /> <TextAnimateUP str={'Digital'} /> <TextAnimateUP str={'Experiences'} /> <TextAnimateUP str={'Through'} /> <TextAnimateUP str={'Code'} /> <TextAnimateUP str={'& '} /> <TextAnimateUP str={'Design'} />
            </h1>
            <p className=' help-text text-center opacity-50 max-w-[40ch] mb-12'>
                Building immersive web experiences that push the boundaries of what's possible
            </p>
            <div className='flex button md:mb-12 cursor-pointer'>
                <div className=' px-3 border py-4 text-background bg-color1 '>
                    <p >View Work</p>
                </div>
                <div className='px-3 py-4'>
                    <p> Get In Touch</p>
                </div>
            </div>
            <div className=" scroll absolute bottom-12 left-0 right-0 flex justify-center ">
                <div className="flex flex-col items-center gap-2 " >
                    <span className="text-sm uppercase tracking-[0.2em] text-color1/40 select-none">
                        Scroll
                    </span>
                    <div className="w-px h-12 bg-color1/40">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection