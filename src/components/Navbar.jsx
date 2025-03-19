import React from 'react';
import { Link } from 'react-router-dom'
import {motion, useScroll, useTransform, MotionConfig} from 'motion/react'
import './NavBar.css';
import logo from '../assets/ANicon-W&B.png'
import Home from '../assets/HomeIcon.png'
import Project from '../assets/ProjectIcon.png'
import Person from '../assets/PersonIcon.png'
import Document from '../assets/DocumentIcon.png'

export default function Navbar  () {

    const { scrollYProgress} = useScroll()
    const background = useTransform(
        scrollYProgress, [0, 0.4], ["#00000000", "#181818B2"]
    )
    const backdropFilter = useTransform(
        scrollYProgress, [0, 0.4], ['blur(0px)', 'blur(10px)']
    )

    return (
        <motion.div className='navbar' style={{ background, backdropFilter }}>
                <a href='/'><img className='my-logo-img' src={logo} alt='MyLogo'/></a>
                <div className='menu'>
                    <ul className='menu-items'>
                    <MotionConfig
                        initial={{scale: 1.0, backgroundImage: 'linear-gradient(to right, #0c3c01 0%, #00000000 0%)'}}
                        whileHover={{ scale: 1.1, backgroundImage: 'linear-gradient(to right, #0c3c01 100%, #00000000 0%)' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        <motion.li className='item'>
                                <Link to='/'><img src={Home} alt='Home' />Home</Link>
                        </motion.li>
                        <motion.li className='item'>
                            <Link to='/about'><img src={Person} alt='Person' />About</Link>
                        </motion.li>
                        <motion.li className='item'>
                            <Link to='/projects'><img src={Project} alt='Project' />Projects</Link>
                        </motion.li>
                        <motion.li className='item'>
                            <Link to='/resume'><img src={Document} alt='Document' />Resume</Link>
                        </motion.li>
                    </MotionConfig>
                    </ul>
                </div>
        </motion.div>
    )
}