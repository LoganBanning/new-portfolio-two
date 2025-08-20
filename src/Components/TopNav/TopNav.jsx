import { useState } from 'react';
import "./TopNav.css"
import {FaGithub , FaLinkedinIn } from "react-icons/fa";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/logan-banning/'},
    {Social: <FaGithub /> , link: 'https://github.com/LoganBanning'},
]

const TopNav = () => {
    return (
        <header className="top_nav_container">
            <nav className="nav_container">
                <label className="nav_label">Home</label>
                <label className="nav_label">About</label>
                <label className="nav_label">Portfolio</label>
                <label className="nav_label">Contact</label>
            </nav>
             <div className="header_right">
                <div className="social_share_inner">
                    <ul className="social_share">
                        {SocialShare.map((val , i) => (
                            <li key={i}><a href={`${val.link}`} target='_blank'>{val.Social}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default TopNav;