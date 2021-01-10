import React, {Component} from "react";
import LinkedInLogo from "../public/linkedin.png";
import GitHubLogo from "../public/github.png";
import SpotifyLogo from "../public/spotify.png";
import RedBackground from '../public/red_strip.svg';
import NicoleIcon from '../public/beanie_cartoon_nicole.png';
import NicolePicture from '../public/christmas_nicole.jpeg';

const Landing = ({ page }) => (
    <div className="landing-container">
        {(page === "Home") ?
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
                <div className="page-link">
                    <a href='/about'><p>>Who am I?</p></a>
                </div>
            </div>
        : 
            <div name="about" className="page">
                <h1>Welcome to my world!</h1>
                <div className="page-header">
                    <div className="image-container">
                        <img className="nicole-picture" src={NicolePicture} alt="Picture of Nicole"/>
                    </div>
                    <div className="text-container">
                        <h2>Hi, I'm Nicole Danuwidjaja. </h2>
                        <p>I'm an aspiring software engineer, entrepreneur, and thinker. I'm a junior at Northeastern University studying Computer Science and Business Administration, graduating in April 2022.</p>
                        <p>Find me working as a Software Engineering Intern at:
                            <li><a href="https://www.datadoghq.com/">Datadog</a> in New York City (Winter-Spring 2021)</li>
                            <li><a href="https://www.salesforce.com/">Salesforce</a> in San Francisco (Summer 2021)</li>
                        </p>
                        <p>This website is my personal online home. Feel free to look around!</p>
                    </div>
                </div>
                <div className="button-container">
                    <button class="button" type="button">Experience</button>
                    <button class="button" type="button">Projects</button>
                    <button class="button" type="button">Timeline</button>
                </div>
            </div>
        }
        <div className="background">
            <img className="background-column" src={RedBackground} alt="background"/>
            <img className="nicole-logo" src={NicoleIcon} alt="Nicole Logo"/>
            <div className="scroll-message">Scroll right...</div>
        </div>
    </div>
);

export default Landing;