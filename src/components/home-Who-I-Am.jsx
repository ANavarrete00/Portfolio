import React from 'react'
import headshot from '../assets/Headshot.jpg'
import './home-Who-I-Am.css'

export default function WhoIAm () {

    return (
        <div className='Who-I-Am'>
            <div className='who-I-Am-text'>
                <h1 className='title'>
                    Who I Am
                </h1>
                <p className='description'>
                    <p>
                        I am a Software Engineer with a passion for problem-solving, designing intuitive applications,
                        and continuously learning new technologies. I see programming as both a logical challenge and a creative outlet,
                        allowing me to bring ideas to life through code.
                    </p>
                    <p>
                        My journey into tech has been different than most. I explored careers in machining and electrical work before discovering
                        my passion for software development. As a first-generation college graduate, earning my BAS in Software Development,
                        I take pride in my adaptability, perseverance, and ability to tackle complex challenges.
                    </p>
                    <p>
                        I enjoy working on personal projects and software that makes an impact. Whether it’s
                        designing a task management app, building an interactive game to teach kids about cybersecurity, or optimizing an application’s backend,
                        I strive to create efficient and meaningful solutions.
                    </p>
                    <p>
                        Outside of coding, you’ll find me exploring the outdoors, playing video games, and perfecting my woodworking skills.
                    </p>
                </p>
            </div>
            <img className='who-I-Am-img' src={headshot} alt='MyHeadshot'/>
        </div>
    )
}