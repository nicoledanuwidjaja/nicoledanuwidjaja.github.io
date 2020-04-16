import Link from 'next/link';
import React, {Component} from 'react';
import { Link as ScrollLink } from 'react-scroll';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const navbarTop = window.scrollY < 200;

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
                    <div className="navhead">
                        <h1>Nicole Danuwidjaja</h1>
                    </div>
                    <div className={this.state.scrolled ? 'navpages scrolled' : 'box-row navpages'}>
                        <div className="social">
                            <a href="https://github.com/nicoledanuwidjaja"><i className="fa fa-github fa-lg"/></a>
                        </div>
                        <ScrollLink to="hello" spy={true} smooth={true} offset={-70} activeClass="active">
                            <a className={this.state.scrolled ? 'navlink-fixed' : 'box navlink'}>
                                {this.state.scrolled ? 'Nicole Danuwidjaja' : 'Home'}
                            </a>
                        </ScrollLink>
                        <Link href="/about">
                            <a className={this.state.scrolled ? 'navlink-fixed' : 'box navlink'}>About</a>
                        </Link>
                    </div>
                </div>

                <style jsx global>{`

			.header {
				font-family: 'Arial';
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
				height: 100vh;
			}
			
			.box-row {
			    display: block;
			    text-align: center;
			    width: 100%;
			}
			
			.box {
			    display: inline-block;
                height: auto;
                padding: 16px;
                border-radius: 8px;
                border: 1px solid #B2003B;
                margin: 1%;
                color: black;
              }
    
			.navhead h1 {
				font-size: 50pt;
			}

			.navhead {
				padding: 15% 1% 1% 2%;
				color: #B2003B;
				font-size: 35pt;
				opacity: 1;
				animation-name: fadeInName;
				animation-iteration-count: 1;
				animation-timing-function: ease-in;
				animation-duration: 1s;
			}

			@keyframes fadeInName {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}

			.navpages {
				flex-direction: column;
			    width: 100%;	
			}
			
			.scrolled {
			    z-index: 10;
			    top: 0;
			    padding: 20px;
			    position: fixed;
			    background-color: #B2003B;
			    animation-name: fadeInName;
				animation-iteration-count: 1;
				animation-timing-function: ease-in;
				animation-duration: 0.15s;
			}
			
			.navlink-fixed {
			    color: white;
				margin: 35px;
				font-size: 14pt;
			}

			.navlink {
			    color: #B2003B;
				margin: 35px;
				font-size: 14pt;
			}

			a {
				text-decoration: none;
				color: blue;
			}

			a:hover {
				opacity: 0.6;
			}
		`}</style>
            </>
        );
    }
}

export default Header;
