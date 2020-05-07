import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = props => (
    <div className="layout">
        <Head>
            <title>Nicole Danuwidjaja Portfolio</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Mono+One" />
        </Head>
        <div className="template">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    </div>
);

export default Layout;
