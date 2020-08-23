import React from "react";
import "../styles/Layout.scss";
import "../styles/Header.scss";
import "../styles/Footer.scss";

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}