import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './styles.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='media-container'>
                <SocialIcon url="https://www.linkedin.com/in/romeu-leite/" network="linkedin" bgColor="#fff" />
                <SocialIcon url="https://github.com/romeuleite" network="github" bgColor="#fff" />
                <SocialIcon url="mailto:romeuleitefilho@gmail.com" network="email" bgColor="#fff" />
            </div>
            <p className='footer-rights'> &copy; {new Date().getFullYear()} Romeu Leite. All rights reserved. </p>
        </div>
    )
}

export default Footer