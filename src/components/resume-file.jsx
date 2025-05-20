import React from 'react';
import { motion } from 'motion/react'
import pdf from '../assets/ANavarrete_Resume2025.pdf'
import downIcon from '../assets/DownloadIcon.png'
import './resume-file.css'

export default function ResumeFile() {
    const downMotion = {
        initial: { y: 0 },
        animate: { y: [0, -8, -8, 0]}
    }
    return (
        <div className="resume-file">
            <iframe className="resume-page" title='resume-page' src="https://drive.google.com/file/d/17_L-_vtihxnNHrSdW_HfGW2jATNdQHrP/preview"
                    width= '750vw' height='915vh' style={{ border: 'none', overflow: 'hidden' }}>
            </iframe>
            <motion.div
                initial='initial'
                animate='initial'
                whileHover='animate'
                transition={{ duration: .5 }}
                className='resume-download'>
                <a  href={pdf} download={'ANavarrete_Resume2025.pdf'}>
                <motion.img variants={downMotion} src={downIcon} alt='downloadIcon' />
                Download Resume</a>
            </motion.div>

        </div>
    )
}