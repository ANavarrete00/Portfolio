import React from 'react'
import './Pages.css'
import BgVideo from "../components/backgroundVideo";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import AboutHeader from '../components/about-header';
import AboutTechSkills from '../components/about-tech-skills';

export default function About() {

    return (
        <div className='Page'>
            <BgVideo />
            <Navbar />
            <AboutHeader />
            <AboutTechSkills />
            <Footer />
        </div>
    )
}