import React, {useEffect, useState} from 'react'
import './components/backgroundVideo.css'
import './pages/Pages.css'
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import TurnstileGate from "./components/TurnstileGate";

//Scrolls to top of page when user changes pages
function ScrollToTop ({ history }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function App () {
    const [isVerified, setIsVerified] = useState(null);

    useEffect(() => {
        fetch("/functions/check-verified", { credentials: "include" })
            .then(res => res.json())
            .then(data => setIsVerified(data.verified))
            .catch(() => setIsVerified(false));
    }, []);

    if (isVerified === null) {
        return null;
    }

    if (!isVerified) {
        return <TurnstileGate />;
    }

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route exact path='/resume' element={<Resume />} />
            </Routes>
        </BrowserRouter>
    )
}