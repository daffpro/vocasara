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
                <meta name="viewport" content="viewport-fit = cover" />
                <meta name="description" content="Vocasar Suarl, apporte un large choix de services graces à des technologies de nouvelle generation dans les domaines que sont les inspections énergetiques, la videosurveillance, et la couverture médiatique(photo, vidéo, documentaires, vidéo clip)." />
                <link type="text/css" rel="stylesheet" href="/static/animate.css"/>
                <script type="text/javascript" src="/static/jquery.js"></script>
                <script type="text/javascript" src="/static/debut.js"></script>
                <script src="//embed.typeform.com/next/embed.js"></script>

            </Head>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}
export default Layout;