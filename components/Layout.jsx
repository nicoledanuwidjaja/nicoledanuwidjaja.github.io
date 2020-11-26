import Header from './Header';
import Landing from './Landing';
import Projects from './Projects';
import Head from 'next/head';
import HorizontalScroll from 'react-scroll-horizontal'

const child = { width: `100vh`, height: `100%`}

const Layout = props => (
    <div className="layout">
        <Head>
            <title>Nicole Danuwidjaja Portfolio</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <HorizontalScroll>
            <Header style={child} />
            <Landing style={child} />
            <Projects style={child} />
        </HorizontalScroll>
        {props.children}
    </div>
);

export default Layout;
