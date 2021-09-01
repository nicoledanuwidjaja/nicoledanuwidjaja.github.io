import React, {Component} from "react";
import LinkedInLogo from "../public/linkedin.png";
import GitHubLogo from "../public/github.png";
import SpotifyLogo from "../public/spotify.png";
import RedBackground from '../public/red_strip.svg';
import NicoleIcon from '../public/beanie_cartoon_nicole.png';
import NicolePicture from '../public/christmas_nicole.jpeg';
import Link from "next/link";
import { getJobs, JobLink } from "../pages/jobs";

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
                <div className="page-container">
                    { (page === "About") ? 
                    <>
                        <div className="page-title">
                            <h1>Welcome to my world!</h1>
                        </div>
                        <div className="page-header">
                            <div className="image-container">
                                <img className="nicole-picture" src={NicolePicture} alt="Picture of Nicole"/>
                            </div>
                            <div className="text-container">
                                <h2>Hi, I'm Nicole Danuwidjaja. </h2>
                                <p>I love technology, writing, and the color red. This website serves as my personal online collection of things that I enjoy.</p>
                            </div>
                        </div>
                        <div className="content-center">

                        </div>
                    </>
                    : 
                    <>
                      <div className="page-title">
                            <h1>Experience</h1>
                        </div>
                        <div className="page-header">
                            <div className="jobs">
                               {getJobs().map(job => (
                                    <JobLink key={job.id} job={job}/>
                                ))}
                            </div>
                        </div>
                    </>
                    }
                </div>
                <div className="button-container">
                    <Link href="/jobs">
                        <button className="button" type="button">Experience</button>
                    </Link>
                    <Link href="/">
                        <button className="button" type="button">Projects</button>
                    </Link>
                    <Link href="/">
                        <button className="button" type="button">Writings</button>
                    </Link>
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