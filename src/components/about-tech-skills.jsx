import React from 'react'
import './about-tech-skills.css'
import java from '../assets/JavaIcon.png'
import cpp from '../assets/CppIcon.png'
import python from '../assets/PythonIcon.png'
import html5 from '../assets/HTML5Icon.png'
import js from '../assets/JavascriptIcon.png'
import css from '../assets/cssIcon.png'
import rt from '../assets/React.png'
import mysql from '../assets/MySQLIcon.png'
import SQLite from '../assets/SQLiteIcon.png'
import git from '../assets/GitIcon.png'
import github from '../assets/icon-github-100.png'
import { motion,  MotionConfig } from 'motion/react'

export default function AboutTechSkills() {
    return (
        <div className='about-tech'>
            <h1>
                Technologies & Skills
            </h1>
            <div className='about-tech-boxes'>
                <MotionConfig
                initial={{ y: 0}}
                whileHover={{ y: [0, -25, -25, 0, -5, 0] }}
                transition={{ duration: .65 }}
                >
                    <div className='icon-box'>
                        <motion.div className='icon'>
                            <img src={java} alt='Java' />
                            <p>Java</p>
                        </motion.div>
                    </div>

                    <div className='icon-box'>
                        <motion.div className='icon'>
                            <img src={cpp} alt='C++' />
                            <p>C++</p>
                        </motion.div>
                    </div>
                    <div className='icon-box'>
                        <motion.div className='icon'>
                            <img src={python} alt='Python' />
                            <p>Python</p>
                        </motion.div>
                    </div>
                    <div className='icon-box'>
                        <motion.div className='icon'>
                            <img src={html5} alt='HTML5' />
                            <p>HTML5</p>
                        </motion.div>
                    </div>
                    <div className='icon-box'>
                        <motion.div className='icon'>
                            <img src={js} alt='Javascript' />
                            <p>JavaScript</p>
                        </motion.div>
                    </div>
                    <div className='icon-box'>
                        <motion.div className='icon'>
                            <img src={css} alt='CSS3' />
                            <p>CSS3</p>
                    </motion.div>
                    </div>
                    <div className='icon-box'>
                        <motion.div className='icon'>
                            <img src={rt} alt='React' />
                            <p>React</p>
                        </motion.div>
                    </div>
                    <div className='icon-box'>
                        <motion.div className='icon'>
                            <img src={mysql} alt='MySQL' />
                            <p>MySQL</p>
                        </motion.div>
                    </div>
                    <div className='icon-box'>
                        <motion.div className='icon'>
                            <img src={SQLite} alt='SQLite' />
                            <p>SQLite</p>
                        </motion.div>
                    </div>
                    <div className='icon-box'>
                        <motion.div className='icon'>
                            <img src={git} alt='Git' />
                            <p>Git</p>
                        </motion.div>
                    </div>
                    <div className='icon-box'>
                        <motion.div className='icon'>
                            <img src={github} alt='GitHub' />
                            <p>GitHub</p>
                        </motion.div>
                    </div>
                </MotionConfig>
            </div>
        </div>
    )
}