import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


const BackgroundAnimate = () => {
    const box1 = useRef()
    const box2 = useRef()
    const box3 = useRef()

    useGSAP(() => {
        gsap.to(box1.current,
            {
                x: 400,
                duration: 1.2,
                ease:'slow',

                scrollTrigger: {
                    trigger: box1.current,
                    start: "center-=135",
                    end: "center+=200 end",
                    scrub: 1,
                }
            })
        gsap.to(box2.current,
            {
                x: -600,
                duration: 1.2,
                ease:'slow',
                scrollTrigger: {
                    trigger: box2.current,
                    start: "center-=393vh",
                    end: "center+=200 top",
                    scrub: 1,
                }
            })
        gsap.to(box3.current,
            {
                x: 800,
                duration: 1.2,
                ease:'slow',
                scrollTrigger: {
                    trigger: box3.current,
                    start: "top-=",
                    end: "center+=135 top",
                    scrub: 1,
                }
            })
    }, [])
    return (
        <div className=" max-md:font-extrabold  absolute text-color1 inset-0 flex flex-col justify-between items-center pointer-events-none  select-none  opacity-[0.07]  -rotate-[10deg]">

            <div  className="relative whitespace-nowrap  py-2  ">
                <div ref={box1}  className="inline-block  md:text-[8vw] text-[38vw]  font-display leading-none" >Creative Developer • Digital Artist • Interactive Designer • Creative Developer • Digital Artist • Interactive Designer • Creative Developer • Digital Artist • Interactive Designer • </div>
            </div>
            <div  className="relative whitespace-nowrap  py-2">
                <div ref={box2} className="inline-block  md:text-[8vw] text-[38vw] font-display leading-none">WebGL • Three.js • React • TypeScript • WebGL • Three.js • React • TypeScript • WebGL • Three.js • React • TypeScript • </div>
            </div>
            <div  className="relative whitespace-nowrap  py-2">
                <div ref={box3} className="inline-block  md:text-[8vw] text-[38vw] font-display leading-none">Motion Design • 3D Animation • UI/UX • Motion Design • 3D Animation • UI/UX • Motion Design • 3D Animation • UI/UX • </div>
            </div>
        </div>
    )
}

export default BackgroundAnimate