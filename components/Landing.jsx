import React, {Component} from "react";
import LinkedInLogo from "../public/linkedin.png";
import GitHubLogo from "../public/github.png";
import SpotifyLogo from "../public/spotify.png";
import RedBackground from '../public/red_strip.svg';
import NicoleIcon from '../public/beanie_cartoon_nicole.png';
import NicoleBurger from "../public/beanie_cartoon_nicole_faceshot_white.png";

const Landing = () => (
    <div className="landing-container">
        <div className="landing-text">
            <div className="website-title">
                <h1>Nicole Danuwidjaja</h1>
            </div>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/nicoledanuwidjaja">
                    <img className="social" src={LinkedInLogo} alt="linkedin logo"/>
                </a>
                <a href="https://github.com/nicoledanuwidjaja">
                    <img className="social" src={GitHubLogo} alt="github logo"/>
                </a>
                <a href="https://open.spotify.com/user/danuwidjaja">
                    <img className="social" src={SpotifyLogo} alt="spotify logo"/>
                </a>
            </div>
        </div>
        <div className="background">
            <img className="background-column" src={RedBackground} alt="background"/>
            <img className="nicole-logo" src={NicoleIcon} alt="Nicole Logo"/>
            <div className="scroll-message">Scroll right...</div>
        </div>
    </div>
);

export default Landing;