import React from 'react'
import { motion, MotionConfig } from 'motion/react'
import './footer.css'
import linkedin from '../assets/icon-linkedin-100.png'
import github from '../assets/icon-github-100.png'
import mail from '../assets/MailIcon.png'

export default function Footer() {

    return (
        <div className="footer">
            <div className='footer-left'>
                <p>
                    Adrian Navarrete
                </p>
            </div>
            <MotionConfig
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.125, ease: 'easeInOut'}}>
                <div className='footer-center'>
                    <a target='_blank' rel='noreferrer' href='https://github.com/ANavarrete00'><motion.img className='footer-img' src={github}  alt="github" /></a>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/adrian-navarrete-a080a7286'><motion.img className='footer-img' src={linkedin} alt="linkedin" /></a>
                    <a href='mailto:adrian.navarrete@yahoo.com'><motion.img className='footer-img' src={mail} alt='email' /> </a>
                </div>
            </MotionConfig>
            <div className='footer-right'>
                <p>Copyright © 2025</p>
            </div>
        </div>
    )
}