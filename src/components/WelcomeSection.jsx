import React, { useContext, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { HeroContext } from '../contexts/HeroAnimateContext';
import { MobileViewContext } from '../contexts/MobileViewContext';

const WelcomeSection = () => {
    const boxRef = useRef()
    const containerRef = useRef()
    const { heroAnimate, setHeroAnimate } = useContext(HeroContext)
    const isMobile = useContext(MobileViewContext);

    useGSAP(() => {
        const boxes = gsap.utils.toArray('.sideHeadings');
        const tl = gsap.timeline();

        // Step 1: Animate .sideHeadings and .welcome **at the same time**
        tl.add(() => {
            boxes.forEach(box => {
                gsap.from(box, {
                    opacity: 0,
                    y: 30,
                    ease: 'power2.inOut',
                    duration: 1
                });
            });

            gsap.from('.welcome', {
                opacity: 0,
                fontSize: '6vw',
                duration: 1,
                marginLeft: '4vw',
                marginRight: '4vw',
                ease: 'power2.inOut'
            });

            gsap.from('.welcome-mobile', {
                opacity: 0,
                fontSize: '14vw',
                duration: 1,
                marginLeft: '5vw',
                marginRight: '5vw',
                ease: 'power2.inOut'
            });
        });

        // Step 2: Animate `.animate-border` **after** the above animations complete
        tl.from('.animate-border', {
            opacity: 0,
            width: '0px',
            duration: 0.5,
            ease: 'power2.inOut',
        }, '+=1');


        tl.add(() => {
            gsap.to('.red-box',
                {
                    height: '60vh',
                    duration: 0.5,
                    ease: 'power4.in'
                })
            gsap.to('.red-box',
                {
                    top: 0,
                    duration: 0.5,
                    onComplete: () => {
                        setHeroAnimate(true)
                    }
                }, '>-0.1')



            gsap.to('.red-box', {
                height: '0vh',
                duration: 0.5,
                ease: 'power4.out',
                onComplete: {

                }
            }, '>-0.05')

            gsap.to(boxRef.current, {
                visibility: "none",
                opacity: 0,
                duration: 0.6,
                y: '-100vh',
                ease: 'power4.in',
                delay: '0.28',
            });

        })


    }, { scope: containerRef.current });

    return (
        <section ref={containerRef} className=' relative text-color1   w-full min-h-[100svh] flex flex-col justify-center items-center z-10  '>

            <div ref={boxRef} className=' bg-background w-full min-h-[100svh]  flex justify-center items-center z-50  '>
                <h1 className='  max-md:hidden  sideHeadings -rotate-90 text-[4vh] tracking-widest mr-[10vw]  opacity-[0.09] whitespace-nowrap'>CREATIVE DEVELOPER</h1>
                <div className='border h-[100vh] opacity-[0.09] '></div>
                <div className=' ml-[2px]'>
                    <h1 className={`${isMobile?' welcome-mobile':'welcome'}  md:text-[8vw] text-[16vw] m-0 p-0 leading-none`}>Welcome</h1>
                    <div className=' animate-border border-[3px] border-red-600'></div>
                </div>
                <div className=' border  h-[100vh] opacity-[0.09] '></div>
                <h1 className=' max-md:hidden  sideHeadings rotate-90 text-[4vh] tracking-widest ml-[10vw]  opacity-[0.09] whitespace-nowrap'>PORTFOLIO LOOKS</h1>
            </div>
            <div className=' red-box absolute bg-red-600 w-full bottom-0 z-50'>

            </div>
        </section>

    )
}

export default WelcomeSection