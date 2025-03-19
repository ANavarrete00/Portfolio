import React from 'react'
import vid from "../assets/gloomy-forest-rainy-afternoon.mp4";
import {motion, useScroll, useTransform} from "motion/react";

export default function BackgroundVideo () {
    const { scrollYProgress} = useScroll()
    const filter = useTransform(
        scrollYProgress, [0.1, 0.4], ['brightness(90%)', 'brightness(50%)']
    )

    return (
        <motion.div className='backgroundVideo' style={{ filter }}>
            <video className='videoBg' src={vid} autoPlay loop muted />
        </motion.div>
    )
}