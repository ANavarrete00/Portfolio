import React from 'react'
import './Pages.css'
import BgVideo from "../components/backgroundVideo";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ProjectHeader from '../components/projects-header'
import ProjectExamples from '../components/projects-examples'

export default function Projects() {

    return (
        <div className='Page'>
            <BgVideo />
            <Navbar />
            <ProjectHeader />
            <ProjectExamples />
            <Footer />
        </div>
    )
}