import Link from 'next/link';

const linkStyle = {
	marginRight: 15
};

const Header = () => (
	<>
		<div className="navbar">
			<h1>Nicole Danuwidjaja</h1>
				<div className="navpages">
				   <Link className="navlink" href="/">
				      <a style={linkStyle}>Home</a>
				   </Link>
				   <Link className="navlink" href="/about">
				      <a style={linkStyle}>About</a>
				   </Link>
				</div>
		</div>

		<style jsx global>{`
			h1, h2, a {
				font-family: 'Arial';
			}

			.navbar {
				display: flex;
				flex-direction: row;
				align-items: center;
				width: auto;
				padding: 20px;
				border: 1px solid #DDD;
				background-color: lightskyblue;
			}

			.navpages {
				margin-left: 70%;
			}
		`}</style>
	</>
);

export default Header;
