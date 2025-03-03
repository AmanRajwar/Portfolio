import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const TextAnimateUP = ({ str}) => {
    const spanRefs = useRef([]); // Array to store span refs

    return (
        <div className="inline-block ">
            {str.split("").map((s, index) => (
                <div
                    key={`${index}-${s}`}
                    // ref={(el) => (spanRefs.current[index] = el)} // Store ref for each span
                    className="inline-block animateee leading-none"
                >
                    {s}
                </div>
            ))}
        </div>
    );
};

export default TextAnimateUP;
