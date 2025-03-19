import React from 'react'
import BgVideo from "../components/backgroundVideo";
import Navbar from "../components/Navbar";
import Introduction from "../components/home-introduction";
import WhoIAm from "../components/home-Who-I-Am";
import Footer from "../components/footer";
import './Pages.css'

export default function Home() {

    return (
        <div className='Page'>
            <BgVideo />
            <Navbar />
            <header className='home-header'>
                <Introduction />
            </header>
            <WhoIAm />
            <Footer />
        </div>
    )
}