import Header from './Header';
import Landing from './Landing';
import Projects from './Projects';
import Head from 'next/head';

const Layout = props => (
    <div className="layout">
        <Head>
            <title>Nicole Danuwidjaja Portfolio</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Header/>
        {/*<Landing/>*/}
        <Projects/>
        {props.children}
    </div>
);

export default Layout;
