import Link from 'next/link';
import React, {Component} from 'react';
import NicoleBurger from '../public/beanie_cartoon_nicole_faceshot_white.png';
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
                <div className={this.state.showMenu ? 'menu open' : 'menu'}>
                    <div className="menu-container">
                        <ul className="menu-items">
                            <li className="menu-item"><a href="#">About</a></li>
                            <li className="menu-item"><a href="#">Projects</a></li>
                            <li className="menu-item"><a href="#">Experience</a></li>
                        </ul>
                    </div>
                </div>

                <div className="hamburger" onClick={this.toggleMenu}>
                    <img className="nicole-burger" src={NicoleBurger} alt="Menu"/>
                    {/* save for mobile */}
                    <span className="ham-bar"/>
                    <span className="ham-bar"/>
                    <span className="ham-bar"/>
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
