import Layout from '../components/Layout';

export default function About() {
   return(
     <>
    <div className="content">
  	  <Layout>
        <div className="container">
          <h1>What is dis?</h1>
          <p>This website was made on a whim on December 22, 2019. I desperately need a portfolio -- mainly because my co-op at <a href="http://whoop.com/">WHOOP</a> as a <strong>Front-End Developer</strong> starts in T-14 days and I don't even have a presentable portfolio.</p>
          <p>Plenty of more updates to come... real soon!</p>

          <h3>Technologies:</h3>
          <ul>
            <li>Next.js</li>
            <li>JSX</li>
          </ul>
        </div>

        <style jsx global>{`
          .content {
            font-family: Roboto;
          }

          .container {
            display: block;
            min-height: 90vh;
            height: auto;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #B2003B;
            margin: 2% 1% 2% 1%;
            color: black;
          }
        `}</style>
     	</Layout>
    </div>
    </>
   )
}
