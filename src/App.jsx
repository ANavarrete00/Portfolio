import React, { useEffect } from 'react'
import './components/backgroundVideo.css'
import './pages/Pages.css'
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import TurnstileGate from "./components/TurnstileGate";

function getCookie(name) {
    return document.cookie.split('; ').find((row) => row.startsWith(name + "="));
}

export default function App () {
    const isVerified = getCookie('verified');

    //Scrolls to top of page when user changes pages
    function ScrollToTop ({ history }) {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

    return (
        <>
            {!isVerified && <TurnstileGate />}
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/projects' element={<Projects />} />
                    <Route exact path='/resume' element={<Resume />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}