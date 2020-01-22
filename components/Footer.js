const Footer = () => (
    <>
        <div className="foobar">
            <div className="copyright">
                <h5>Made with Next.js</h5>
                <p>Developed and designed by Nicole Danuwidjaja 2020</p>
            </div>
        </div>
        <style jsx global>{`
      .foobar {
        font-family: Roboto;
        text-align: center;
        width: auto;
				height: auto;
				margin: 20px;
        padding: 20px;
				border-radius: 20px;
        color: #B2003B;
      }
    `}</style>
    </>
);

export default Footer;
