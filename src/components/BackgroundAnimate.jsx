import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

const BackgroundAnimate = () => {
    const [state, setState] = useState(1)
    const box1 = useRef()
    const box2 = useRef()
    const box3 = useRef()

    useGSAP(() => {
        gsap.to(box1.current,
            {
                x: 100,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: box1.current,
                    scroller: 'body', 
                    start: "top top", 
                    end: "bottom 50%+=100px",
                    markers:true,
                    scrub: 1,         
                }
            })
    }, [])
    return (
        <div className=" abc absolute text-color1 inset-0 flex flex-col justify-around overflow-hidden pointer-events-none  select-none  opacity-[0.07]">

            <div className="relative whitespace-nowrap overflow-hidden py-2 border">
                <div ref={box1} class="inline-block  text-[8vw] font-display leading-none" >Creative Developer • Digital Artist • Interactive Designer • Creative Developer • Digital Artist • Interactive Designer • Creative Developer • Digital Artist • Interactive Designer • </div>
            </div>
            {/* <div class="relative whitespace-nowrap overflow-hidden py-2">
                <div class="inline-block  text-[8vw] font-display leading-none">WebGL • Three.js • React • TypeScript • WebGL • Three.js • React • TypeScript • WebGL • Three.js • React • TypeScript • </div>
            </div>
            <div class="relative whitespace-nowrap overflow-hidden py-2">
                <div class="inline-block  text-[8vw] font-display leading-none">Motion Design • 3D Animation • UI/UX • Motion Design • 3D Animation • UI/UX • Motion Design • 3D Animation • UI/UX • </div>
            </div> */}
        </div>
    )
}

export default BackgroundAnimate