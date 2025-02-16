import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


const BackgroundAnimate = () => {
    const [state, setState] = useState(1)
    const box1 = useRef()
    const box2 = useRef()
    const box3 = useRef()

    useGSAP(() => {
        gsap.to(box1.current,
            {
                x: 200,
                duration: 1.2,
                // ease: "power2.inOut",
                scrollTrigger: {
                    trigger: box1.current,
                    start: "center-=135",
                    end: "center+=200 end",
                    scrub: 1,
                }
            })
        gsap.to(box2.current,
            {
                x: -300,
                duration: 1.2,
                scrollTrigger: {
                    trigger: box2.current,
                    start: "center-=393vh",
                    end: "center+=200 top",
                    scrub: 1,
                }
            })
        gsap.to(box3.current,
            {
                x: 400,
                duration: 1.2,
                scrollTrigger: {
                    trigger: box3.current,
                    start: "top-=",
                    end: "center+=135 top",
                    scrub: 1,
                }
            })
    }, [])
    return (
        <div className=" -rotate-12 absolute text-color1 inset-0 flex flex-col justify-around overflow-hidden items-center pointer-events-none  select-none  opacity-[0.07] -left-10">

            <div className="relative whitespace-nowrap overflow-hidden py-2 ">
                <div ref={box1} class="inline-block  text-[8vw] font-display leading-none" >Creative Developer • Digital Artist • Interactive Designer • Creative Developer • Digital Artist • Interactive Designer • Creative Developer • Digital Artist • Interactive Designer • </div>
            </div>
            <div ref={box2} class="relative whitespace-nowrap overflow-hidden py-2">
                <div class="inline-block  text-[8vw] font-display leading-none">WebGL • Three.js • React • TypeScript • WebGL • Three.js • React • TypeScript • WebGL • Three.js • React • TypeScript • </div>
            </div>
            <div ref={box3} class="relative whitespace-nowrap overflow-hidden py-2">
                <div class="inline-block  text-[8vw] font-display leading-none">Motion Design • 3D Animation • UI/UX • Motion Design • 3D Animation • UI/UX • Motion Design • 3D Animation • UI/UX • </div>
            </div>
        </div>
    )
}

export default BackgroundAnimate