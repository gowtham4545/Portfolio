import React, { useRef, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../Animated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
        alert('Message Successfully sent!');
    }

    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 5000)
    return (
        <>
            <div className='container contact-page' >
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} letterClass={letterClass} idx={12} />
                    </h1>
                    <div className='box'>
                        <div className='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input type='text' name='name' placeholder='Name' required />
                                    </li>
                                    <li className='half'>
                                        <input type='email' name='email' placeholder='Email' required />
                                    </li>
                                    <li className=''>
                                        <input type='text' name='subject' placeholder="Subject" required />
                                    </li>
                                    <li>
                                        <textarea placeholder='Message' name='message' required></textarea>
                                    </li>
                                    <li>
                                        <input type='submit' className='flat-button' value={'SEND'} />
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div className='profiles' >
                            <a href='https://github.com/gowtham4545'>
                                <FontAwesomeIcon className='icon' icon={faGithub} color='aliceblue' />
                            </a>
                            <a href='https://www.linkedin.com/in/gowtham4545/'>
                                <FontAwesomeIcon className='icon' icon={faLinkedinIn} color='#0A66C2' />
                            </a>
                            <a href=''>
                                <FontAwesomeIcon className='icon' icon={faTwitter} color='#0A66C2' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;
