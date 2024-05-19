import React, { useRef, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../Animated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Form, redirect, useLocation } from 'react-router-dom';

const Contact = () => {
    const location = useLocation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [letterClass, setLetterClass] = useState('text-animate');
    const clear = () => {
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
    }
    const refForm = useRef();
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyWladfWqVo2uQmfbAkwn2jQDFv14OWSYttCLjx1pCHpPjKyTxeBi92pUhEEnxlSJb3/exec';
    const sendEmail = (e) => {
        e.preventDefault()
        // var a = fetch(scriptUrl, { method: 'POST', body: new FormData(refForm.current) });
        // a.then(response => {
        //     clear();
        // }).catch(err => {
        //     alert('Error sending message!!!');
        // })
        let content = `Subject: ${subject}\n\n${message}`

        const baseURL = 'https://gowtham-api.vercel.app/mail';  // Replace with your actual API endpoint
        const uri = `${baseURL}?name=${encodeURIComponent(name)}&message=${encodeURIComponent(content)}&email=${encodeURIComponent(email)}`;

        // Make the GET request using fetch
        fetch(uri, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let url = `https://gowtham-api.vercel.app/mail?name=${name}&email=${email}&message=${content}`
        console.log(uri);
        // fetch(url)
    }
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 5000)
    return (
        <>
            <div className='container contact-page' >
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} letterClass={letterClass} idx={12} />
                    </h1>
                    <div className='box'>
                        <div className='contact-form'>
                            <form ref={refForm} action={''} method='post' onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
                                    </li>
                                    <li className='half'>
                                        <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
                                    </li>
                                    <li className=''>
                                        <input type='text' name='subject' value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" required />
                                    </li>
                                    <li>
                                        <textarea placeholder='Message' value={message} onChange={e => setMessage(e.target.value)} name='message' required></textarea>
                                    </li>
                                    <li>
                                        <input type='submit' id='button' className='flat-button' value={'SEND'} onClick={e => clear} />
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
                            <a href='https://www.instagram.com/gowtham4__/'>
                                <FontAwesomeIcon className='icon' icon={faInstagram} color={'#fd17ba'} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
    // #FD17BA
}

export default Contact;
