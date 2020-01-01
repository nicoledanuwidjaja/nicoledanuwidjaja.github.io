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
        font-family: Arial;
        text-align: center;
        width: auto;
				background-color: #00ACEE;
				height: auto;
        padding: 20px;
				border-radius: 20px;
        color: white;
      }
    `}</style>
  </>
);

export default Footer;
