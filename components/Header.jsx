import Link from 'next/link';
import React, {Component} from 'react';
import NicoleBurger from '../public/beanie_cartoon_nicole_faceshot.png';
import NicoleBurgerHover from '../public/beanie_cartoon_nicole_faceshot_red_full.png';
import NicoleBurgerWhite from '../public/beanie_cartoon_nicole_faceshot_white.png';
import NicoleBurgerHoverWhite from '../public/beanie_cartoon_nicole_faceshot_white_full.png';
import Footer from "./Footer";

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
            <div className={`header ${this.state.showMenu ? 'open' : ''}`}>
                <div className={`menu ${this.state.showMenu ? 'open' : ''}`}>
                    <div className="menu-container">
                        <ul className="menu-items">
                            <li className="menu-item"><a href="/">Home</a></li>
                            <li className="menu-item"><a href="/about">About</a></li>
                            <li className="menu-item"><a href="#">Writings</a></li>
                            <li className="menu-item"><a href="/jobs">Experience</a></li>
                        </ul>
                        <Footer/>
                    </div>
                </div>

                <div className="hamburger" onClick={this.toggleMenu}>
                    {this.state.showMenu ?
                    <a>
                        <img className="nicole-burger" src={NicoleBurgerWhite} alt="Menu"/>
                        <img className="nicole-burger-hover" src={NicoleBurgerHoverWhite} alt="Menu Hovered"/> 
                    </a> 
                    :
                    <a>
                        <img className="nicole-burger" src={NicoleBurger} alt="Menu"/>
                        <img className="nicole-burger-hover" src={NicoleBurgerHover} alt="Menu Hovered"/>
                    </a>
                    }
                    {/* save for mobile */}
                    <span className="ham-bar"/>
                    <span className="ham-bar"/>
                    <span className="ham-bar"/>
                </div>
            </div>
        );
    }
}

export default Header;
