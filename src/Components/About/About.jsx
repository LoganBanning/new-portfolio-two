import "./About.css"
import { useState } from "react"
import TextLoop from "../utils/TextLoop"

const About = () => {

    return (
        <div className="about_container">
            <h1>Hi, I'm Logan<br/>
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
        </div>
    )
}

export default About;