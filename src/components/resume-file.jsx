import React from 'react';
import { motion } from 'motion/react'
import pdf from '../assets/ANavarrete_Resume.pdf'
import downIcon from '../assets/DownloadIcon.png'
import './resume-file.css'

export default function ResumeFile() {
    const downMotion = {
        initial: { y: 0 },
        animate: { y: [0, -8, -8, 0]}
    }
    return (
        <div className="resume-file">
            <iframe title='resume-page' src="https://docs.google.com/document/d/e/2PACX-1vSMulVixZ9TH8QkRs3_UjqgfpV-h7ds6yccDVVs4TmlwsZVo0ETmrX-3Qhsbble-Ahlwf0P44DIHN6i/pub?embedded=true"
                    width= '40%' height='870px' style={{ border: 'none' }}>
            </iframe>

                <motion.div
                    initial='initial'
                    animate='initial'
                    whileHover='animate'
                    transition={{ duration: .5 }}
                    className='resume-download'>
                    <a  href={pdf} download={'ANavarrete_Resume.pdf'}>
                    <motion.img variants={downMotion} src={downIcon} alt='downloadIcon' />
                    Download Resume</a>
                </motion.div>

        </div>
    )
}