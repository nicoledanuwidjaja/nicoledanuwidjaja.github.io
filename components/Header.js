import Link from 'next/link';

const linkStyle = {
	marginRight: 15
};

const Header = () => (
	<>
		<div className="navbar">
			<div className="navhead">
				<h1>Nicole Danuwidjaja</h1>
			</div>
			<div className="social">
				<a href="https://github.com/nicoledanuwidjaja"><i className="fa fa-github fa-lg"/></a>
			</div>
			<div className="navpages">
			   <Link href="/">
			      <a className="navlink" style={linkStyle}>Home</a>
			   </Link>
			   <Link href="/about">
			      <a className="navlink" style={linkStyle}>About</a>
			   </Link>
			</div>
		</div>

		<style jsx global>{`
			body {
				background-color: #B2003B;
			}

			.navbar {
				font-family: 'Arial';
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
				height: 35vh;
			}

			.navbar a {
				color: white;
			}

			.navhead h1 {
				font-size: 50pt;
			}

			.navhead {
				padding: 1%;
				color: white;
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
				margin-left: 35%;
			}

			.navlink {
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

export default Header;
