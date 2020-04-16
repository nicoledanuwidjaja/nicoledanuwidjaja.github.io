import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Layout = props => {
  return(
    <div>
      <Head>
        <title>Nicole Danuwidjaja Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="template">
      	<Header />
      	{props.children}
        <Footer />
      </div>

      <style jsx global>{`
        .template {
          top: 0;
        }
      `}</style>
    </div>
  )
};

export default Layout;
