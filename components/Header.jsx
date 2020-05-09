import Link from 'next/link';
import React, {Component} from 'react';
import LinkedInLogo from '../public/linkedin.png';
import GitHubLogo from '../public/github.png';
import SpotifyLogo from '../public/spotify.png';
import RedBackground from '../public/red_strip.svg';
import NicoleIcon from '../public/beanie_cartoon_nicole.png';
import {Link as ScrollLink} from 'react-scroll';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            showMenu: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(e) {
        e.preventDefault();

        this.setState({showMenu: !this.state.showMenu});
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const navbarTop = window.scrollY < 550;

            if (navbarTop !== true) {
                this.setState({scrolled: true});
            } else {
                this.setState({scrolled: false});
            }
        });
    }

    render() {
        return (
            <div className="header">
                <div className="hamburger" onClick={this.toggleMenu}>
                    <span className="ham-bar"/>
                    <span className="ham-bar"/>
                    <span className="ham-bar"/>
                </div>
                <div className={this.state.showMenu ? 'menu open' : 'menu'}>
                    <div className="menu-container">
                        <ul className="menu-items">
                            <li className="menu-item"><a href="#">About</a></li>
                            <li className="menu-item"><a href="#">Blog</a></li>
                            <li className="menu-item"><a href="#">Random</a></li>
                        </ul>
                    </div>
                </div>
                <div className="landing-container">
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
                </div>
                {/*<div className={this.state.scrolled ? 'scrolled' : 'box-row'}>*/}
                {/*    <div className="social">*/}
                {/*        <a href="https://github.com/nicoledanuwidjaja"><i className="fa fa-github fa-lg"/></a>*/}
                {/*    </div>*/}
                {/*    <ScrollLink to="hello" spy={true} smooth={true} offset={-80} activeClass="active">*/}
                {/*        <div className={this.state.scrolled ? 'navlink-fixed' : 'box navlink'}>*/}
                {/*            {this.state.scrolled ? 'Nicole Danuwidjaja' : 'Home'}*/}
                {/*        </div>*/}
                {/*    </ScrollLink>*/}
                {/*    <ScrollLink to="projects" spy={true} smooth={true} offset={-80} activeClass="active">*/}
                {/*        <div className={this.state.scrolled ? 'navlink-fixed' : 'box navlink'}>Projects</div>*/}
                {/*    </ScrollLink>*/}
                {/*    <ScrollLink to="jobs" spy={true} smooth={true} offset={-80} activeClass="active">*/}
                {/*        <div className={this.state.scrolled ? 'navlink-fixed' : 'box navlink'}>Experience</div>*/}
                {/*    </ScrollLink>*/}
                {/*    <ScrollLink to="interests" spy={true} smooth={true} offset={-80} activeClass="active">*/}
                {/*        <div className={this.state.scrolled ? 'navlink-fixed' : 'box navlink'}>Interests</div>*/}
                {/*    </ScrollLink>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Header;
