import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MobileNav = ({ toggle }) => {
  const menuRef = useRef();
  const h1 = useRef()
  const h2 = useRef()
  const h3 = useRef()
  useGSAP(() => {
    if (!toggle) {

      gsap.to('.animate', {
        x: "-100",
        opacity: 0,
        duration: 0.4,
        stagger:0.2,
        ease: "sine.in",
        reversed:true
      }, [toggle])
    } else {
      gsap.to('.animate', {
        x: "0",
        opacity: 1,
        duration: 0.4,
        ease: "sine.out",
        stagger:0.2
      })
    }
  }, {dependencies: [toggle], scope: menuRef.current}) 
  

  return (
    <div
      ref={menuRef}
      className="md:hidden absolute top-0 left-0 w-full h-[100dvh] flex flex-col  pt-16 pl-8  animate"

    >
      <h1 ref={h1} className="animate text-xl mb-4">Work</h1>
      <h1 ref={h2} className="animate text-xl mb-4">About</h1>
      <h1 ref={h3} className="animate text-xl mb-4">Contact</h1>
    </div>
  );
};

export default MobileNav;
