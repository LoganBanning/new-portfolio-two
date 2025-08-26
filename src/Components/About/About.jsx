import "./About.css"
import { useState } from "react"
import TextLoop from "../utils/TextLoop"
import LoganHeadshot from "../../assets/Images/headshot-logan.jpg"

const About = () => {

    return (
        <div className="about_container">
            <h1 className="intro_text">Hi, I'm Logan.<br/>
                <TextLoop
                    items={[
                        "React.js",
                        "JavaScript",
                        "Node.js",
                        "HTML & CSS",
                        "PostgreSQL",
                        "T SQL",
                        "C#",]} />
            </h1>
            <h2>Full Stack Web Developer</h2>
            <div className="about_me_container">
                <img className="headshot" src={LoganHeadshot} alt="headshot of me" />
                <div className="work_info">
                    <h2 className="about_text">About Me</h2>
                    <p>I am a fullstack web developer.  I have been working at JusticeWorks for the past 2 years, since July 31st, 2023.  
                        We make software for public defender attorneys and I am a dedicated developer for our Miami contract which is one of our biggest contracts.
                        I primarily work with HTML, CSS and JavaScript for our front end.  Our backend code uses T SQL and C#.  
                    </p>
                    <h2 className="about_text">Education</h2>
                    <p>I attended Utah State Universisty from 2010-2012 and received an Associates of Science.</p>
                    <p>I started coding in 2019 and did a coding bootcamp in 2020 where I received a certification of completion for a fullstack course through DevMountain in Lehi, Utah where I studied React, Node.js, PostgresSQL, HTML, CSS and JavaScript.</p>
                </div>
            </div>
        </div>
    )
}

export default About;