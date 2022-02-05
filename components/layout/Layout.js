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
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
                
               
                <link type="text/css" rel="stylesheet" href="/static/animate.css"/>
                <script type="text/javascript" src="/static/jquery.js"></script>
                <script type="text/javascript" src="/static/debut.js"></script>
           

            </Head>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}
export default Layout;