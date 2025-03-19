import React from 'react';
import './projects-examples.css'
import linkIcon from '../assets/LinkIcon-White.png'
import { motion } from 'motion/react'

export default function ProjectsExamples() {
    return (
        <div className='projects-examples'>
            <div className='projects-examples-box'>
                <h2>
                    PrioryPilot
                </h2>
                <p>
                    This application was built as part of a collaborative project to improve productivity and organization.
                    It allows users to create, edit, and categorize tasks efficiently. Features include a drag-and-drop
                    interface, due dates, editing, deleting, and priority levels.
                </p>
                <p>
                    Technologies: Java, JavaFX, MySQL
                </p>
                <a href='https://github.com/ANavarrete00/To-Do-list' target='_blank' rel='noreferrer'>
                    <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: [0, 5, -5, 5, 0] }} transition={{ duration: 0.5 }} className='projects-button'>
                        <h3>GitHub</h3>
                        <img
                            src={linkIcon} alt='' />
                    </motion.div>
                </a>
            </div>
            <div className='projects-examples-box'>
                <h2>
                    Password Strength Game
                </h2>
                <p>
                    This interactive game teaches kids how to create stronger passwords through a fun, competitive system.
                    Users gain points by making secure passwords, while a simulated “hacker” attempts to crack them.
                    The game checks password strength by using an in-house algorithm based on length, special characters, and numbers, providing real-time feedback.
                </p>
                <p>
                    Technologies: Java, JavaFX
                </p>
                <a href='https://github.com/ANavarrete00/Password-Game-for-Kids' target='_blank' rel='noreferrer'>
                    <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: [0, 5, -5, 5, 0] }} transition={{ duration: 0.5 }} className='projects-button'>
                        <h3>GitHub</h3>
                        <motion.img src={linkIcon} alt='' />
                    </motion.div>
                </a>
            </div>
        </div>
    )
}