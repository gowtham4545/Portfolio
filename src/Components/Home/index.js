import React, { useState } from 'react';
import LogoTitle from '../../assets/images/logo-g.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../Animated';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['o', 'w', 't', 'h', 'a', 'm']
    const jobArray = ['H', 'i', ',']


    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000);

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={9} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={['I', "'", 'm', ' ']} idx={12} />
                        <img src={LogoTitle} alt='developer' />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={18} />
                    </h1>
                    <h2>Full Stack Developer | Tech Enthusiast</h2>
                    <Link to={'/contact'} className='flat-button'>CONTACT ME</Link>
                </div>

                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home
