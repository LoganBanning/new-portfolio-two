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
                <h2>About Me</h2>
            </div>
        </div>
    )
}

export default About;