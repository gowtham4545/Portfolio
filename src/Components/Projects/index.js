import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../Animated'
import './index.scss'
import gather from '../../Data/Images/1.jpg';
import binary from '../../Data/Images/2.png';
import face from '../../Data/Images/3.png';
import faceRecog from '../../Data/Images/faceRecognition.jpg';


const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const jobArray = ['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']


    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000);
    return (
        <>
            <div className='container project-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={12} />
                    </h1>
                </div>
                <div className='projects' >
                    <div className='project'>
                        <a href='https://github.com/gowtham4545/Gather'>
                            <img src={gather} alt='' />
                            Gather : Live Meeting App
                        </a>
                    </div>
                    <div className='project'>
                        <a href='https://github.com/BinaryBrains-SG/Binary'>
                            <img src={binary} alt='' />
                            Binary Brains : Educational Platform
                        </a>
                    </div>
                    <div className='project'>
                        <a href='https://github.com/BinaryBrains-SG/Hackazon22'>
                            <img src={face} alt='' />
                            Vision.io : Face Recognition App
                        </a>
                    </div>
                    <div className='project'>
                        <a href='https://github.com/gowtham4545/Project'>
                            <img src={faceRecog} alt='' />
                            Sign2Sound : Sign Language to Speech
                        </a>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Project
