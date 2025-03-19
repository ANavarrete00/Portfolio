import React from 'react'
import './Pages.css'
import BgVideo from "../components/backgroundVideo";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ResumeFile from '../components/resume-file'

export default function Resume() {


    return (
        <div className='Page'>
            <BgVideo />
            <Navbar />
            <ResumeFile />
            <Footer />
        </div>
    )
}