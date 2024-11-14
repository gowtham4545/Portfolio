import React, { useState } from 'react';
import './index.scss';
import AnimatedLetters from '../Animated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 5000)

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={12} letterClass={letterClass} />
                    </h1>
                    <p>I'm currently working as an Associate SW Systems Engineer at Extreme Networks.</p>
                    <p>With a strong passion for software engineering and systems development, I thrive on solving complex problems and creating innovative solutions.</p>
                    <p>I'm quiet confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner' >
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faPython} color='#5ed4f4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJava} color='#dd0031' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About;
