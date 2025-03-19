import React, {useEffect, useState} from 'react'
import './home-introduction.css'
import {motion} from 'motion/react'


function Introduction () {
    const [item, setItem] = useState(0)
    const myList = ["Software Engineer", "Creative Thinker", "Passionate Learner", "Problem Solver"]

    useEffect(() => {
        const interval = setInterval(() => {
            setItem(prevItem => (prevItem >= myList.length - 1 ? 0 : prevItem + 1));
        }, 5000);
        return () => clearInterval(interval)
    })

    return (
        <div className='introduction'>

            <h1 className='introduction-header'>
                Hi and welcome to my website!
            </h1>
            <h2 className='introduction-name'>
                I'm Adrian Navarrete, a
            </h2>
            <div className='introduction-list'>
                    <motion.h1
                        key={item}
                        initial={{ opacity: 0, x: -100}}
                        animate={{ opacity: [0, 1, 1, 0], x: [-100, 0, 0, 100]}}
                        transition={{duration: 5, ease: 'easeInOut', repeat: Infinity}}
                    >{myList[item]}</motion.h1>
            </div>
        </div>
    )
}
export default Introduction;