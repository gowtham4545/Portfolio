import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../Animated'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faCss3Alt, faGitAlt, faGolang, faHtml5, faJava, faJsSquare, faLinux, faNodeJs, faPython, faReact, faWindows } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'


const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const jobArray = ['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']


    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000);
    return (
        <>
            <div className='container skill-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={12} />
                    </h1>
                </div>
                <div className='skills' >
                    <div className='block'>
                        {/* <h2>Languages</h2> */}
                        <div className='box'>
                            {/* <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faC} color='#006178' />
                                <h3>C++</h3>
                            </div> */}
                            <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faC} color='#fff' />
                                <h3>C/C++</h3>
                            </div>
                            <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faGolang} color='#00A7D0' />
                                <h3>Golang</h3>
                            </div>
                            <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faJava} color='#ED272C' />
                                <h3>Java</h3>
                            </div>
                            <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faPython} color='#3470A1' />
                                <h3>Python</h3>
                            </div>
                            <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faJsSquare} color='#EFD81D' />
                                <h3>JavaScript</h3>
                            </div>
                            <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faHtml5} color='#DD4B25' />
                                <h3>Html</h3>
                            </div>
                            <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faReact} color='#62D4F3' />
                                <h3>React Js</h3>
                            </div>
                            <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faCss3Alt} color='#375AE0' />
                                <h3>Css</h3>
                            </div>
                            <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faNodeJs} color='#3C823B' />
                                <h3>Node Js</h3>
                            </div>
                            <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faGitAlt} color='#E84D31' />
                                <h3>Git</h3>
                            </div>
                            <div className='unit'>
                                <FontAwesomeIcon className='icon' icon={faLinux} color='#000' />
                                <h3>Linux</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Skills;
