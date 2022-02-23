import React from "react";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "./Header";
import Footer from "./Footer";


const Layout = ({children, title='Volantis - Inspection par drone'})  => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link type="text/css" rel="stylesheet" href="/static/animate.css"/>
               

            </Head>
            <Header/>
                {children}
                <script type="text/javascript" src="/static/jquery.js"></script>
                <script type="text/javascript" src="/static/debut.js"></script>
                <script src="//embed.typeform.com/next/embed.js"></script>
            <Footer/>
        </div>
    )
}
export default Layout;