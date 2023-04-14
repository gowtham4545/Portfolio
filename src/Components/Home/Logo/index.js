import './index.scss'
import React, { useEffect, useRef } from 'react'
import Pic from '../../../assets/images/img.jpg'
import { gsap } from 'gsap-trial';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(()=>{
        gsap.timeline()
        .to(bgRef.current,{
            duration:1,
            opacity:1
        })
        .from(outlineLogoRef.current,{
            drawSVG:0,
            duration:20,
        })

        gsap.fromTo(
            solidLogoRef.current,{
                opacity:0,
                x:100,
            },
            {
                opacity:1,
                delay:1,
                duration:2,
                x:0,
            }
        )
    },[])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={Pic} alt='logo' />
        </div>
    )
}

export default Logo
