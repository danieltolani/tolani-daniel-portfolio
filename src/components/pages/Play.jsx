import React, { useState } from "react";
import '../../sass/play.scss'
import { useRive } from '@rive-app/react-canvas';

const Play = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    const { RiveComponent, rive } = useRive({
        src: '/animations/test.riv',
        autoplay: true,
        stateMachines: "State Machine 1", // Replace with your state machine name
    });

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (rive) {
            rive.play("hover"); // Replace "hover" with your animation name
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (rive) {
            rive.pause("hover");
        }
    };

    return(
        <main className="play-section">
            <div className="content-wrapper">
                <div 
                    className="rive-animation"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <RiveComponent />
                </div>
                <div className="loved-by">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none"><path fill="#884EC0" d="M15.955 2.762V1.431h-1.546V.099h-3.091v1.332H9.773v1.331H8.227V1.431H6.682V.099H3.591v1.332H2.045v1.331H.5v3.995h1.545v1.331h1.546V9.42h1.545v1.331h1.546v1.331h1.545v1.332h1.546v-1.332h1.545v-1.331h1.546V9.42h1.545V8.088h1.546V6.757H17.5V2.762Z"/><path fill="#FEEFC4" d="M3 3h2v2H3ZM5 5h2v2H5Z"/></svg>
                    <span>Loved by</span>
                </div>
            </div>
        </main>
    )
}

export default Play;



