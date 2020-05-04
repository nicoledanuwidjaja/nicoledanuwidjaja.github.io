import Link from 'next/link';
import React, {Component} from 'react';
import { Link as ScrollLink } from 'react-scroll';

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
            <>
                <div className="header">
                    <div className="hamburger" onClick={this.toggleMenu}>
                        <span className="ham-bar" />
                        <span className="ham-bar" />
                        <span className="ham-bar" />
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
                    <div className="navhead">
                        <h1>Nicole Danuwidjaja</h1>
                    </div>
                    <div className={this.state.scrolled ? 'scrolled' : 'box-row'}>
                        <div className="social">
                            <a href="https://github.com/nicoledanuwidjaja"><i className="fa fa-github fa-lg"/></a>
                        </div>
                        <ScrollLink to="hello" spy={true} smooth={true} offset={-80} activeClass="active">
                            <div className={this.state.scrolled ? 'navlink-fixed' : 'box navlink'}>
                                {this.state.scrolled ? 'Nicole Danuwidjaja' : 'Home'}
                            </div>
                        </ScrollLink>
                        <ScrollLink to="projects" spy={true} smooth={true} offset={-80} activeClass="active">
                            <div className={this.state.scrolled ? 'navlink-fixed' : 'box navlink'}>Projects</div>
                        </ScrollLink>
                        <ScrollLink to="jobs" spy={true} smooth={true} offset={-80} activeClass="active">
                            <div className={this.state.scrolled ? 'navlink-fixed' : 'box navlink'}>Experience</div>
                        </ScrollLink>
                        <ScrollLink to="interests" spy={true} smooth={true} offset={-80} activeClass="active">
                            <div className={this.state.scrolled ? 'navlink-fixed' : 'box navlink'}>Interests</div>
                        </ScrollLink>
                    </div>
                </div>

                <style jsx global>{`

			.header {
				font-family: 'Roboto';
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
				height: 100vh;
			}

			.hamburger {
			    cursor: pointer;
			    position: absolute;
			    display: flex;
			    flex-direction: column;
			    width: 36px;
			    height: 36px;
			    top: 10px;
			    right: 1%;
			    z-index: 101;
			}
			
			.ham-bar {
			    display: block;
			    height: 4px;
			    width: 36px;
			    background-color: darkred;
			    margin-bottom: 5px;
			    right: 0;
			}

			.menu-container {
			    transition: opacity 0.5s;
			    position: fixed;
			    display: table;
			    top: 0;
			    left: 0;
			    background: rgba(178, 0, 59, 0.4);
			    width: 100%;
			    height: 100vh;
			    z-index: 100;
			}
			
			.menu {
                display: none;
            }

			.open {
			    display: block;
			}
			
			.menu-items {
			    display: table-cell;
			    text-align: center;
			    vertical-align: middle;
			    list-style: none;
			}
			
			.menu-item li:hover {
			    background-color: yellow;
			}
			
			.menu-item a {
			    transition: 0.3s ease-in-out;
			    text-transform: uppercase;
			    font-weight: bold;
			    font-size: 5vh;
			    line-height: 2;
			}
			
			.box-row {
			    display: block;
			    text-align: center;
			    width: 50%;
			}

			.box {
			    display: inline-block;
                height: auto;
                padding: 16px;
                border-radius: 8px;
                border: 1px solid darkred;
                margin: 1%;
                color: black;
            }

			.navhead h1 {
				font-size: 50pt;
			}

			.navhead {
			    margin-top: 15%;
				padding: 2% 1%;
				color: darkred;
				font-size: 35pt;
				opacity: 1;
				animation-name: fadeInName;
				animation-iteration-count: 1;
				animation-timing-function: ease-in;
				animation-duration: 1s;
			}


			.scrolled {
			    display: flex;
			    flex-direction: row;
			    width: 100%;
			    justify-content: left;
			    z-index: 10;
			    top: 0;
			    position: fixed;
			    background-color: darkred;
			    animation-name: fadeInName;
				animation-iteration-count: 1;
				animation-timing-function: ease-in;
				animation-duration: 0.15s;
			}

			.navlink-fixed {
			    cursor: pointer;
			    color: white;
				margin: 20px;
				font-size: 14pt;
			}

			.navlink {
			    cursor: pointer;
			    color: darkred;
				margin: 10px 20px 10px 20px;
				font-size: 14pt;
			}

			.navlink:focus {
			    background-color: red;
			}

			a {
				text-decoration: none;
				color: blue;
			}

			a:hover {
				opacity: 0.6;
			}

			@keyframes fadeInName {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
		`}</style>
            </>
        );
    }
}

export default Header;
