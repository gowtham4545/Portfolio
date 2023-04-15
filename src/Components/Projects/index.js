import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../Animated'

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const jobArray = ['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']


    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000);
    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={12} />
                    </h1>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Project
